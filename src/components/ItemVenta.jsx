import {useState} from 'react'

function ItemVenta({item, pedido, obtenerDetalle}) {
    const [cantidad, setCantidad] = useState(1)
    const [detalle, setDetalle] = useState([
        {
            id_pedido: '',
            id_item: '',
            cantidad_pedido: '',
            precio_detalle_pedido: ''
        }
    ])

    const insertarItem = (numPedido,item,cantidad,precio) =>{
        const nextItem = [
                    // Items before the insertion point:
                    ...detalle.slice(0, 0),
                    // New item:
                    { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, precio_detalle_pedido: precio}
                  ];
        setDetalle(prevDetalle => [...prevDetalle, nextItem])
        console.log(detalle)
    }

    const { 
        ID_ITEM,
        NOMBRE_ITEM,
        PRECIO_ITEM
    } = item

    const {
        ID_PEDIDO
    } = pedido

    return (
        <>
            <div key={ID_ITEM} value={ID_ITEM}
                className="grid-cols-3 block p-3 m-3 bg-gray-50 text-center rounded overflow-hidden shadow-lg"
            >
                <div>
                    <div>{NOMBRE_ITEM}</div>
                    <div id="precio_detalle_pedido" className="precio_detalle_pedido">${PRECIO_ITEM * cantidad}</div>
                    <input
                        id="cantidad_pedido"
                        name="cantidad_pedido"
                        type="number"
                        className="block w-full p-3 bg-gray-50"
                        // placeholder={cantidad}
                        defaultValue={1}
                        onChange={(event) => setCantidad(event.target.value)}
                    />
                    <div onClick={() => insertarItem(ID_PEDIDO, ID_ITEM, cantidad, PRECIO_ITEM)}>Añadir producto</div>
                </div>
            </div>
        </>
    )
}

export default ItemVenta