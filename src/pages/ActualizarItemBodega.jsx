import {Form, redirect, useActionData, useLoaderData, useNavigate} from "react-router-dom";
import {actualizarItemBodega, obtenerBodegaItem} from "../data/bodegas.js";

export async function loader({params}){
    const item =  await obtenerBodegaItem(params.itemid)
    if (Object.values(item).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El item no fue encontrado'
        })
    }

    console.log(item)
    return {item}
}

export async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    // Actualizar Cliente
    await actualizarItemBodega(params.itemId, datos)
    //await obtenerUbicacion(params.ubicacionId)
    return redirect('/bodegas')
}

function ActualizarItemBodega({id_bodega, id_item, cantidad}) {

    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Item de Bodega</h1>
            <p className="mt-3">A continuación podrás modificar la cantidad de un item</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">CLiente</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">


                <Form
                    method="PUT"
                >
                    <div className="mb-4">
                        <label
                            className="flex justify-start text-gray-800"
                            htmlFor="nombre_cliente"
                        >Cantidad:</label>
                        <input
                            id="nombre_cliente"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Cantidad del item de la bodega"
                            name="nombre_cliente"
                            defaultValue={cantidad}
                        />
                    </div>

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

export default ActualizarItemBodega;