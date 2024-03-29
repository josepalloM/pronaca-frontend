import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioItem from "../components/FormularioItem";
import Error from "../components/Error";
import { agregarItems, obtenerListaItems } from "../data/items";
import {obtenerTiposItem} from '../data/tipo_item';
import {obtenerEstadosProduccion} from '../data/estado_produccion';
import {obtenerBodegas} from '../data/bodegas';
import {obtenerPasosReceta} from '../data/paso_receta'
import {obtenerRecetasProduccion} from '../data/receta_produccion'


export async function loader() {
  const tipoitem = await obtenerTiposItem()
  const idListaItem = await obtenerListaItems()
  const estadosproduccion = await obtenerEstadosProduccion()
  const bodega = await obtenerBodegas()
  const pasoreceta = await obtenerPasosReceta()
  const recetas_produccion = await obtenerRecetasProduccion()
  return {tipoitem, idListaItem, estadosproduccion, bodega, pasoreceta, recetas_produccion}
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

  await agregarItems(datos)

  console.log(datos)
  return redirect('/produccion')
}

function NuevoItem() {

  const {tipoitem,idListaItem,estadosproduccion,bodega,pasoreceta,recetas_produccion} = useLoaderData()
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
            <FormularioItem tipo_items={tipoitem} listaitems={idListaItem} estadosproduccion={estadosproduccion}
            bodegas={bodega} pasoreceta={pasoreceta} recetaproduccion={recetas_produccion}/>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <input
                        type="submit"
                        className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        value="Guardar"
                        onClick={()=>navigate('/gestorlista')}
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