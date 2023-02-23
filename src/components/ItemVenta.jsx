import {useState} from 'react'

function ItemVenta({item, pedido, obtenerDetalle}) {
    const [cantidad, setCantidad] = useState(0)
    const [detalle, setDetalle] = useState([])

    const insertarItem = (numPedido,item,cantidad,precio) =>{
        // const nextItem = [
        //             // New item:
        //             { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, precio_detalle_pedido: precio}
        //           ];
        setDetalle(prevDetalle => [...prevDetalle, { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, precio_detalle_pedido: precio}])
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
            <div
                key={ID_ITEM}
                value={ID_ITEM}
                id="id_item"
                name="id_item"
                className="grid-cols-3 block p-3 m-3 bg-gray-50 text-center rounded overflow-hidden shadow-lg"
            >
                <div>
                    <div>{NOMBRE_ITEM}</div>
                    <div id="precio_detalle_pedido" name="precio_detalle_pedido" className='text-left ml-5'>Precio: <div className='text-center'>${PRECIO_ITEM}</div></div>
                    <input
                        id="cantidad_pedido"
                        name="cantidad_pedido"
                        type="number"
                        className="block w-full p-3 bg-gray-50 text-center"
                        // placeholder={cantidad}
                        defaultValue={0}
                        onChange={(event) => setCantidad(event.target.value)}
                    />
                    <div>${PRECIO_ITEM * cantidad}</div>
                    <div onClick={() => insertarItem(ID_PEDIDO, ID_ITEM, cantidad, PRECIO_ITEM)}>Añadir producto</div>
                </div>
            </div>
        </>
    )
}

export default ItemVenta