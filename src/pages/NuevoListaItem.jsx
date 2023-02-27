import { useNavigate, Form, useActionData, redirect, Link } from "react-router-dom"
import FormularioListaItem from "../components/FormularioListaItems";
import Error from "../components/Error";
import { agregarListaItems } from "../data/items";
import { obtenerCuentas } from "../data/cuentas";

/*export async function loader() {
  const cuentas = await obtenerCuentas()
  return { cuentas }
}*/

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  
  //validaciones
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay erroes
  if (Object.keys(errores).length) {
    return errores
  }

  await agregarListaItems(datos)

  console.log(datos)
  return redirect('/gestorlista')
}

function NuevaListaItem() {

  //const { cuentas } = useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-black">Nueva Lista Item</h1>
      <p className="mt-3">Llena todos los campos para agregar un nuevo item</p>
      <div>
        <button className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
          onClick={() => navigate(-1)}
        >Volver</button>
      </div>
      <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Crear Lista Item</div>

      <div className="Contenedor-form">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <FormularioListaItem />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="submit"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                value="Guardar"
                onClick={()=>{navigate('/gestorlista')}}
              />
            </div>
            <div>
              <button
                type="button"
                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={()=>{navigate('/gestorlista')}}
              >Cancelar</button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NuevaListaItem