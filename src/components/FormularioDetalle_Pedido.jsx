import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";

const FormularioDetalle_Pedido = ({detalle_pedido, pedido, items}) => {    
    
    const [item, setItems] = useState("")
    console.log(item)
    const [precio, setPrecio] = useState("")
    const [cantidad, setCantidad] = useState(1)
    const [captureItem, setCaptureItem] = useState([
        {
            id_pedido: '',
            id_item: '',
            cantidad_pedido: '',
            precio_detalle_pedido: ''
        }
    ])
    
    return (
        // <div className="grid grid-cols-3 gap-4">
        //     <div className="my-4"> Pedido 
        //     {
        //         <input
        //         id="id_pedido"
        //         name="id_pedido"
        //         type="text"
        //         className="block w-full p-3 bg-gray-50"
        //         value={pedido.ID_PEDIDO}
        //         readOnly
        //         />
        //     }
        //     </div>
            
        //     <div className="my-4">
        //     {
                    
        //     }
        //     </div>
        //     <div className="my-4">
        //     {
                    
        //     }
        //     </div>
            
        //     <div className="my-4"> Seleccione un item
        //     {items.length ?(
        //             <select 
        //                 id="id_item" 
        //                 name="id_item" 
        //                 onChange={(event)=>setItems(event.target.value)} 
        //                 className="block w-full p-3 bg-gray-50"
        //                 >
        //                 <option >Selecciona un item</option>
        //                 {items.map(item =>(
        //                     <option key={item.ID_ITEM} value={item.ID_ITEM}>{item.NOMBRE_ITEM}</option>
        //                 ))}
        //             </select>
                    
        //             ):(<p> No existen Items</p>)}
        //     </div>

        //     <div className="my-4">Cantidad
        //     {
        //         <input
        //         id="cantidad_pedido"
        //         name="cantidad_pedido"
        //         type="number"
        //         className="block w-full p-3 bg-gray-50"
        //         placeholder={1}
        //         />
        //     }
        //     </div>

        //     <div className="my-4"> Precio unitario
        //     {items.length ?(
        //             <select 
        //                 id="precio_detalle_pedido" 
        //                 name="precio_detalle_pedido" 
        //                 onChange={(event)=>setItems(event.target.value)} 
        //                 className="block w-full p-3 bg-gray-50"
        //                 >
        //                 {items.map(item =>(
        //                     <option key={item.ID_ITEM} value={item.ID_ITEM}>{item.PRECIO_ITEM}</option>
        //                 ))}
        //             </select>
                    
        //             ):(<p> No existen Items</p>)}
        //     </div>
            
        // </div>



    /////// NUEVO FORMULARIO ////////

        <div className="grid grid-cols gap-4">
            {captureItem.map((input, index) => {
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
                        //  onChange={(event)=>setItems(event.target.value)} 
                         className="grid grid-cols-3"
                         >
                         {items.map(item =>(
                            <div key={item.ID_ITEM} value={item.ID_ITEM}
                            className="grid-cols-3 block p-3 m-3 bg-gray-50 text-center rounded overflow-hidden shadow-lg">
                            <div>
                                <div>{item.NOMBRE_ITEM}</div>
                                <div className="precio">${item.PRECIO_ITEM*cantidad}</div>
                                <input
                                    id="cantidad_pedido"
                                    name="cantidad_pedido"
                                    type="number"
                                    className="block w-full p-3 bg-gray-50"
                                    placeholder={cantidad}
                                    defaultValue={1}
                                    onChange={(event)=>setCantidad(event.target.value)}
                                    />
                            </div>
                            </div>
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