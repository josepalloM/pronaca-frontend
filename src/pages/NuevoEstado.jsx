import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom";
import FormularioEstado  from "../components/FormularioEstado";
import Error from "../components/Error";
import { agregarEstado  } from "../data/estado";



export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  console.log(datos)

  //validaciones
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push("Todos los campos son obligatorios");
  }

  //Retornar datos si hay errores
  if (errores.length) {
    return errores;
  }
  await agregarEstado (datos);

  return redirect("/finanzas/estado");
}




function NuevoEstado () {
  const errores = useActionData();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    // Validar el formulario antes de enviar los datos
    const errores = await action({ request: new FormData(form) });
    setErrores(errores);
};



    
  
  

  return (
    <>
      <h1 className="font-black text-4xl text-black">Nuevo Estado de Resultados </h1>
      <p className="mt-3">Llena todos los campos para agregar un nuevo estado de resultados </p>
      <div className="flex justify-start bg-black text-white rounded md:w-3/4 mx-auto px-5 py-2 mt-6">
        Estado 
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <FormularioEstado  />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="submit"
                className="flex justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                value="Registrar Estado "
              />
            </div>
            <div>
              <button
                type="button"
                className="flex justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default NuevoEstado ;