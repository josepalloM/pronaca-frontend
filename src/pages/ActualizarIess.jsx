import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import Error from "../components/Error";
import { obtenerParametro, actualizarParametro} from "../data/parametros_iess";


export async function loader({params}){
    const iess =  await obtenerParametro(params.iessId)
    if (Object.values(iess).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El valor del IESS no fue encontrado'
        })
    }
    
    return iess
}

export async function action({request, params}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)
    //Validacion
    const errores = []
    if (Object.values(datos).includes('')){
        errores.push('Todos los campos sosn necesarios')
    }

    //Retornar datos si ha errores
    if (Object.keys(errores).length){
        return errores
    }

    // Actualizar Cliente
    await  actualizarParametro(params.iessId,datos)
    return redirect('/empleados/iess')
}

function ActualizarIess() {
  const iess = useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1 className="font-black text-4xl text-black">IESS</h1>
        <p className="mt-3">Llena el valor del IESS</p>

        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form
            method="POST"
          >
            <div className="mb-4">
              <label
                className="flex justify-start text-gray-800"
                htmlFor="nombre_parametro"
                >Nombre:</label>
              <input 
                id="nombre_parametro"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del parámetro"
                name="nombre_parametro"
                defaultValue={iess.NOMBRE_PARAMETRO}
              />
              </div>
                <div className="mb-4">
                  <label
                    className="flex justify-start text-gray-800"
                    htmlFor="valor"
                  >Valor:</label>
                  <input 
                    id="valor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Valor del parámetro"
                    name="valor"
                    pattern="[0-9]*"
                    defaultValue={iess.VALOR}
                  />
                </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="submit"
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    value="Actualizar Parámetro"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    onClick={() => navigate(-1)}
                  >Cancelar</button>
                </div>       
              </div>
            
          </Form>
        </div>
    </>
  )
}

export default ActualizarIess