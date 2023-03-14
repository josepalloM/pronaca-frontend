import { useNavigate, Form, useActionData, redirect, useLoaderData} from "react-router-dom"
import FormularioPasoReceta from "../components/FormularioPasoReceta";
import Error from "../components/Error";
import { agregarPasoReceta } from "../data/paso_receta";
import {obtenerRecetasProduccion} from '../data/receta_produccion'


export async function loader() {
  const recetas_produccion = await obtenerRecetasProduccion()
  return recetas_produccion
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

  await agregarPasoReceta(datos)

  console.log(datos)
  return redirect('/gestorreceta')
}

function NuevoPaso_Receta() {

  const errores = useActionData()
  const navigate = useNavigate()
  const receta_produccion = useLoaderData()

  return (
    <>
        <h1 className="font-black text-4xl text-black">Nuevo Paso de la Receta</h1>
        <p className="mt-3">Llena todos los campos para agregar una nueva receta</p>
        <div>
          <button className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
            onClick={()=> navigate(-1)}
          >Volver</button>
        </div>
        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Crear Receta Producción</div>
      
        <div className="Contenedor-form">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <Form method="POST">
            <FormularioPasoReceta recetaproduccion={receta_produccion} />
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <input
                        type="submit"
                        className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        value="Guardar"
                        onClick={()=>{navigate('/gestorreceta')}}
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

export default NuevoPaso_Receta