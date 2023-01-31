const FormularioPedido = ({pedido}) => {    
    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha_pedido"
                >Fecha:</label>
                <input 
                    id="fecha_pedido"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Fecha del pedido"
                    name="fecha_pedido"
                    defaultValue={pedido?.FECHA_PEDIDO}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="pedido_devuelto"
                >Devuelto:</label>
                <input 
                    id="pedido_devuelto"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Pedido devuelto"
                    name="pedido_devuelto"
                    defaultValue={pedido?.PEDIDO_DEVUELTO}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="estado_pedido"
                >Estado:</label>
                <input 
                    id="estado_pedido"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Estado del pedido"
                    name="estado_pedido"
                    defaultValue={pedido?.ESTADO_PEDIDO}
                />
            </div>
        </>
    )
}

export default FormularioPedido