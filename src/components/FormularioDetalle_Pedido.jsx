import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";

const FormularioDetalle_Pedido = ({detalle_pedido, pedido, items}) => {    
    
    const [pedido, setPedidos] = useState("")
    const [item, setItems] = useState("")
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="my-4"> Seleccione un item
            {items.length ?(
                    <select 
                        id="id_item" 
                        name="id_item" 
                        onChange={(event)=>setItems(event.target.value)} 
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