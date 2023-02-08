import { useNavigate, Form, useActionData, useLoaderData, redirect } from "react-router-dom"
import FormularioCargo from "../components/FormularioCargo";
import Error from "../components/Error";
import { agregarCargo } from "../data/cargo_empleado";
import { obtenerDepartamentos } from "../data/departamentos";

export async function loader() {
  const departamentos = await obtenerDepartamentos()
  return { departamentos }
}

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

  await agregarCargo(datos)

  console.log(datos)
  return redirect('/empleados/cargos')
}

function NuevoCargo() {
  const errores = useActionData()
  const { departamentos } = useLoaderData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-black">Nuevo Cargo</h1>
      <p className="mt-3">Ingrese la información del nuevo cargo</p>

      <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cargo</div>
      <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="POST"


        >
          <FormularioCargo departamentos={departamentos} />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="submit"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                value="Registrar Cargo"
              />
            </div>


            <div>
              <button
                type="button"
                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(-1)}
              >Volver</button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NuevoCargo