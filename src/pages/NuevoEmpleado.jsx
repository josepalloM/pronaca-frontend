import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarEmpleado} from "../data/empleados";
import { obtenerDepartamentos } from "../data/departamento";
import { obtenerCargos } from "../data/cargo_empleado";

export async function loader() {
  const departamentos = await obtenerDepartamentos()
  const cargos_empleado = await obtenerCargos()
  return {departamentos, cargos_empleado}
}

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

  console.log(datos)
  return redirect('/empleados')
}

function NuevoEmpleado() {
  const {departamentos,cargos_empleado}= useLoaderData()
  console.log("c"+cargos_empleado)
  console.log("ex"+departamentos)
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
            <Formulario departamentos={departamentos} cargos_empleado={cargos_empleado}/>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="submit"
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    value="Registrar Empleado"
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

export default NuevoEmpleado