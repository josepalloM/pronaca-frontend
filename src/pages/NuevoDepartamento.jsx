import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormularioDepartamento from "../components/FormularioDepartamento";
import Error from "../components/Error";
import { agregarDepartamento } from "../data/departamentos";

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

  await agregarDepartamento(datos)

  console.log(datos)
  return redirect('/departamentos')
}

function NuevoDepartamento() {

  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-black">Nuevo Departamento</h1>
      <p className="mt-3">Ingrese el nombre del nuevo departamento</p>

      <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Departamento</div>
      <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="POST"


        >
          <FormularioDepartamento />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="submit"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                value="Registrar Departamento"
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

        export default NuevoDepartamento