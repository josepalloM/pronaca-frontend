import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioCuenta from "../components/FormularioCuenta";
import Error from "../components/Error";
import {obtenerCuentas, agregarCuentas} from "../data/cuentas";

export async function loader() {
  const cuentas = await obtenerCuentas()
  return cuentas
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

  await agregarCuentas(datos)

  console.log(datos)
  return redirect('/finanzas/cuentas')
}

function NuevaCuenta() {
  const cuentas= useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1 className="font-black text-4xl text-black">Nueva Cuenta</h1>
        <p className="mt-3">Llena todos los campos para agregar una Nueva Cuenta</p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cuenta</div>

        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form
            method="POST"
          >
            <FormularioCuenta cuentas={cuentas}/>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="submit"
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    value="Registrar Cuenta"
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

export default NuevaCuenta