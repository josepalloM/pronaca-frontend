import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarEmpleado } from "../data/empleados";

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

  await agregarEmpleado(datos)
  return redirect('/empleados')
}

function NuevoEmpleado() {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1>Nuevo Empleado</h1>
        <p>Llena todos los campos para agregar un nuevo empleado</p>

        <div>
          <button
            onClick={()=> navigate(-1)}
          >Volver</button>
        </div>

        <div className="Contenedor-form">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form
            method="POST"
            

          >
            <Formulario/>

            <input 
              type="submit"
              value="Registrar Empleado"  
            />
          </Form>
        </div>
    </>
  )
}

export default NuevoEmpleado