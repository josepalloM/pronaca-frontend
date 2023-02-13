import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";

const FormularioDetalle_Pedido = ({detalle_pedido, pedido, items}) => {    
    
    const [idPedido, setPedidos] = useState("")
    const [item, setItems] = useState("")

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="my-4"> Pedido 
            {
                    <input
                    id="ESTADO_PEDIDO"
                    name="ESTADO_PEDIDO"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Estado del pedido"
                    value={pedido.ID_PEDIDO}
                    readOnly
                />
            }
            </div>
            
            <div className="my-4"> Fecha
            {
                    <label> {pedido.FECHA_PEDIDO}</label>
            }
            </div>
            
            <div className="my-4"> Seleccione un item
            {items.length ?(
                    <select 
                        id="id_item" 
                        name="id_item" 
                        onChange={(event)=>setItems(event.target.value)} 
                        multiple={true}
                        className="form-control border-2 border-black"
                        >
                        <option >Selecciona un item</option>
                        {items.map(item =>(
                            <option key={item.ID_ITEM} value={item.ID_ITEM}>{item.NOMBRE_ITEM}</option>
                        ))}
                    </select>
                    ):(<p> No existen Items</p>)}
            </div>
        </div>
    );
}

export default FormularioDetalle_Pedido