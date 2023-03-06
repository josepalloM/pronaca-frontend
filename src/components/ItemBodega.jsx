import {Form, redirect, useNavigate} from "react-router-dom";
import {actualizarItemBodega} from "../data/bodegas.js";
import { useState } from 'react';

function ItemBodega({id_item, cantidad, id_bodega}) {
    const navigate = useNavigate()
    const [count, setCount] = useState(0);
    async function guardar(){
        setCount(10);
        await actualizarItemBodega(id_item,count,id_bodega)
        //navigate(-1)
    }

    return (
        <td className="p-4 flex justify-center gap-3">
            <div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="nombre_cliente"
                    >Editar Cantidad:</label>
                    <input
                        id="nombre_cliente"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Cantidad del item de la bodega"
                        name="nombre_cliente"
                        defaultValue={cantidad}
                        onChange= {event => {
                            setCount(event.target.value);
                        }}
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <input
                            type="submit"
                            className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                            value="Editar Cantidad del Item"
                            onClick={guardar}
                        />
                    </div>
                </div>
            </div>
        </td>
    )
}

export default ItemBodega