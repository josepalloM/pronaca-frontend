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

function ActualizarItem() {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1>Actualizar Item</h1>
        <p>Llena todos los campos para agregar un nuevo item</p>

        <div>
          <button
            onClick={()=> navigate(-1)}
          >Volver</button>
        </div>

        <div className="Contenedor-form">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form method="POST">
            <FormularioItem/>
            <input 
              type="submit"
              value="Registrar Item"  
            />
          </Form>
        </div>
    </>
  )
}

export default ActualizarItem