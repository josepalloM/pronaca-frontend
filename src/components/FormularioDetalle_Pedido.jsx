import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";
import ItemVenta from "../components/ItemVenta";

const FormularioDetalle_Pedido = ({detalle_pedido, pedido, items}) => {    
    
    
    const [detalle, setDetalle] = useState('');

    const obtenerDetalle = (detalleItems) => {
        const nextItem = [
            // Items before the insertion point:
            ...detalle.slice(0, 0),
            // New item:
            detalleItems
          ];
        setDetalle(prevDetalle => [...prevDetalle, nextItem])
        
    }

    return (

    /////// NUEVO FORMULARIO ////////

        <div className="grid grid-cols gap-4">
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
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          >
                          {items.map(item =>(
                             <ItemVenta
                                 key={item.ID_ITEM}
                                 pedido={pedido}
                                 item={item}
                                 obtenerDetalle={obtenerDetalle}
                             />
                          ))}
                      </div>
                    
                      ):(<p> No existen Items</p>)}
            </div>
        </div>

    );
}

export default FormularioDetalle_Pedido