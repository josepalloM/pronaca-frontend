const FormularioCliente = ({cliente}) => {    
    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_cliente_potencial"
                >Nombre:</label>
                <input 
                    id="nombre_cliente_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del cliente"
                    name="nombre_cliente_potencial"
                    defaultValue={cliente?.NOMBRE_CLIENTE_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="apellido_cliente_potencial"
                >Apellido:</label>
                <input 
                    id="apellido_cliente_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del cliente"
                    name="apellido_cliente_potencial"
                    defaultValue={cliente?.APELLIDO_CLIENTE_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="direccion_cliente_potencial"
                >Dirección:</label>
                <input 
                    id="direccion_cliente_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="direccion_cliente_potencial"
                    defaultValue={cliente?.DIRECCION_CLIENTE_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc_cedula_clientepotencial"
                >Cedula/Ruc:</label>
                <input 
                    id="ruc_cedula_clientepotencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="ruc_cedula_clientepotencial"
                    defaultValue={cliente?.RUC_CEDULA_CLIENTEPOTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_cliente_potencial"
                >Teléfono:</label>
                <input
                    id="telefono_cliente_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_cliente_potencial"
                    defaultValue={cliente?.TELEFONO_CLIENTE_POTENCIAL}
                />
            </div>
        </>
    )
}

export default FormularioCliente
