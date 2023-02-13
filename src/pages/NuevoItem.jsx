import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormularioItem from "../components/FormularioItem";
import Error from "../components/Error";
import { agregarItems } from "../data/items";

export  async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  //validaciones
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay erroes
  if(Object.keys(errores).length){
    return errores
  }

  await agregarItems(datos)

  console.log(datos)
  return redirect('/produccion')
}

function NuevoItem() {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1 className="font-black text-4xl text-black">Nuevo Item</h1>
        <p className="mt-3">Llena todos los campos para agregar un nuevo item</p>
        <div>
          <button className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
            onClick={()=> navigate('/gestorlista')}
          >Volver</button>
        </div>
        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Crear Item</div>
      
        <div className="Contenedor-form">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form method="POST">
            <FormularioItem/>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <input
                        type="submit"
                        className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        value="Guardar"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        onClick={() => navigate('/gestorlista')}
                    >Cancelar</button>
                </div>
            </div>
          </Form>
        </div>
    </>
  )
}

export default NuevoItem