import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";
import ItemVenta from "../components/ItemVenta";

const FormularioDetalle_Pedido = ({detalle_pedido, pedido, items}) => {    
    
    const [item, setItems] = useState("")
    const [detalle, setDetalle] = useState([
        {
            id_pedido: '',
            id_item: '',
            cantidad_pedido: '',
            precio_detalle_pedido: ''
        }
    ])


    // const insertarItem = (numPedido,item,cantidad,precio) =>{
    //     const nextItem = [
    //         // Items before the insertion point:
    //         ...detalle.slice(0, 0),
    //         // New item:
    //         { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, precio_detalle_pedido: precio},
    //         // Items after the insertion point:
    //         ...detalle.slice(0)
    //       ];
    //       setDetalle(nextItem);
    //       console.log(detalle);
    // }

    // const insertarItem = (numPedido,item,cantidad,precio) =>{
    //     const nextItem = [
    //                 // Items before the insertion point:
    //                 ...detalle.slice(0, 0),
    //                 // New item:
    //                 { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, precio_detalle_pedido: precio}
    //               ];
    //     setDetalle(prevDetalle => [...prevDetalle, nextItem])
    //     //console.log(detalle)
    // }
    // const [cantidad, setCantidad] = useState('')



    return (

    /////// NUEVO FORMULARIO ////////

        <div className="grid grid-cols gap-4">
            {detalle.map((input, index) => {
          return (
            <div key={index}>
              <div className="my-4"> Pedido 
             {
                 <input
                 id='id_pedido'
                 name='id_pedido'
                 type="text"
                 className="block w-1/4 p-3 bg-gray-50"
                 value={pedido.ID_PEDIDO}
                 readOnly
                 />
             }
             </div>
             <div className="my-4">Seleccione los productos
                  {items.length ?(
                     <div 
                         id='id_item' 
                         name='id_item'
                         className="grid grid-cols-3"
                         >
                         {items.map(item =>(
                            <ItemVenta
                                key={pedido.ID_ITEM}
                                pedido={pedido}
                                item={item}
                            />
                         ))}
                     </div>
                    
                     ):(<p> No existen Items</p>)}
             </div>




            </div>
          )
        })}
        </div>

    );
}

export default FormularioDetalle_Pedido