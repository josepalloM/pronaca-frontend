import {agregarItems, obtenerItem, actualizarItem} from "../data/items.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from 'react-router-dom'
import FormularioUpdateItem from '../components/FormularioActualizarItem'

export async function loader({params}){
  const item = await obtenerItem(params.itemId)
  if(Object.values(item).length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'El item no fue encontrado'
    })
  }
  console.log("Cliente en actualizar", item)
  return item
}

export async function action({request, params}){

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

  //actualizar item
  await actualizarItem(params.itemId, datos)
  console.log(datos)
  return redirect('/produccion')

};

function ActualizarItem(){
    const navigate = useNavigate();
    const item = useLoaderData();
    const errores = useActionData()

  return(
    <>
        <h1 className="font-black text-4xl text-black">Editar Item</h1>
        <p className="mt-3">Puede modificar los datos un nuevo item</p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Editar Item</div>
        <div className="Contenedor-form">    
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

            <Form method="POST">
                <FormularioUpdateItem 
                  item={item}
                />

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="submit"
                      className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                      value="Editar Item"
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
  );
}

export default ActualizarItem