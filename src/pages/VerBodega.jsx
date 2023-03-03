import {obtenerBodega} from "../data/bodegas.js";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import React from "react";

export async function loader({params}){
    const items = await obtenerBodega(params.bodegaId)
    if (Object.values(items).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'La bodega no fue encontrado'
        })
    }
    return {items}
}

function VerBodega(){
    const navigate = useNavigate()
    const {items} = useLoaderData()
    console.log(items)
    var opcionesItems = items.map(function(cl){
        var rObj = {};
        rObj["nombreBodega"] = cl.NOMBRE;
        rObj["sector"] = cl.SECTOR_UBICACION;
        rObj["nombre"] = cl.NOMBRE_ITEM;
        rObj["cantidad"] = cl.CANTIDAD;
        return rObj;
    });

    return(
        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5 content-center">
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_cliente"
                >Nombre de la bodega:</label>
                <input
                    id="nombre_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 block"
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
                    className="mt-2 block w-full p-3 bg-gray-50 block"
                    name="nombre"
                    defaultValue={opcionesItems[0].sector}
                    readOnly
                />
            </div>
            <table className="table-fixed">
                <thead>
                <tr>
                    <th className="bg-orange-500 text-black border text-left px-8 py-4">Item</th>
                    <th className="bg-orange-500 text-black border text-left px-8 py-4">Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {opcionesItems.map(item =>(
                    <tr  key={item.nombre}>
                        <td className="border px-8 py-4">{item.nombre} </td>
                        <td className="border px-8 py-4">{item.cantidad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button
                    type="button"
                    className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    onClick={() => navigate(-1)}
                >Cancelar</button>
            </div>
        </div>
    );
}

export default VerBodega;