import {obtenerBodega} from "../data/bodegas.js";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import React from "react";
import ItemBodega from "../components/ItemBodega.jsx";

export async function loader({params}){
    const items = await obtenerBodega(params.bodegaId)
    const bodega_id = params.bodegaId
    if (Object.values(items).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'La bodega no fue encontrado'
        })
    }
    return {items, bodega_id}
}

function VerBodega(){
    const navigate = useNavigate()
    const {items, bodega_id} = useLoaderData()
    console.log(items[0])
    if(items[0] !== undefined){
        var opcionesItems = items.map(function(cl){
            var rObj = {};
            rObj["id"] = cl.ID_ITEM;
            rObj["nombreBodega"] = cl.NOMBRE;
            rObj["sector"] = cl.SECTOR_UBICACION;
            rObj["nombre"] = cl.NOMBRE_ITEM;
            rObj["cantidad"] = cl.CANTIDAD;
            rObj["lote"] = cl.LOTE_ITEM;
            rObj["cantlote"] = cl.CANTIDAD_LOTE_ITEM;
            rObj["unidad"] = cl.UNIDAD_MEDIDA;
            rObj["peso"] =cl.PESO_ITEM;
            return rObj;
        });
    }


    return(
        <>
            {items.length ? (
                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5 content-center">
                    <div className="mb-4">
                        <label
                            className="flex justify-start text-gray-800"
                            htmlFor="nombre_cliente"
                        >Nombre de la bodega:</label>
                        <input
                            id="nombre_cliente"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="nombre_cliente"
                            defaultValue={opcionesItems[0].nombreBodega}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="flex justify-start text-gray-800"
                            htmlFor="nombre"
                        >Ubicación de la bodega:</label>
                        <input
                            id="nombre"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="nombre"
                            defaultValue={opcionesItems[0].sector}
                            readOnly
                        />
                    </div>
                    <table className="table-fixed">
                        <thead>
                        <tr>
                            <th className="bg-black text-white border text-left px-8 py-4">Item</th>
                            <th className="bg-black text-white border text-left px-8 py-4">Cantidad</th>
                            <th className="bg-black text-white border text-left px-8 py-4">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {opcionesItems.map(item =>(
                            <tr  key={item.nombre}>
                                <td className="border px-8 py-4">{item.nombre}  <br/>LOTE: {item.lote} <br/>CANTIDAD X LOTE: {item.cantlote} <br/>UNIDAD: {item.unidad} <br/>PESO: {item.peso}  </td>
                                <td className="border px-8 py-4">{item.cantidad} {item.unidad}</td>
                                <ItemBodega
                                    id_item={item.id}
                                    id_bodega={bodega_id}
                                    cantidad={item.cantidad}
                                    key={item.id}
                                />
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div>
                        <button
                            type="button"
                            // className="flex justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                            className="flex justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm
                                    leading-tight 
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                            onClick={() => navigate(-1)}
                        >Regresar</button>
                    </div>
                </div>) : (
                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5 content-center">
                    <p className="text-center mt-10"> No existen items en la bodega</p>
                    <div>
                        <button
                            type="button"
                            className="flex justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm
                                    leading-tight 
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                            onClick={() => navigate(-1)}
                        >Regresar</button>
                    </div>
                </div>)
            }
        </>
    );
}

export default VerBodega;