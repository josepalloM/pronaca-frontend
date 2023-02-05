import {agregarItems, obtenerListaItem, actualizarListaItem} from "../data/items.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from 'react-router-dom'
import FormularioListaItems from "../components/FormularioListaItems.jsx";

export async function loader({params}){
  const listaItem = await obtenerListaItem(params.listaId)
  if(Object.values(listaItem).length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'La Lista item no fue encontrado'
    })
  }
  console.log("Lista en actualizar", listaItem)
  return listaItem
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
  await actualizarListaItem(params.listaId, datos)
  console.log(datos)
  return redirect('/gestorlista')

};

function ActualizarListaItem(){
    const navigate = useNavigate();
    const listaItem = useLoaderData();
    const errores = useActionData()

  return(
    <>
        <h1 className="font-black text-4xl text-black">Editar Lista Item</h1>
        <p className="mt-3">Puede modificar los datos de la Lista item</p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Editar Lista Item</div>
        <div className="Contenedor-form">    
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

            <Form method="POST">
                <FormularioListaItems 
                  listaItem={listaItem}
                />

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="submit"
                      className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                      value="Editar Lista Item"
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

export default ActualizarListaItem