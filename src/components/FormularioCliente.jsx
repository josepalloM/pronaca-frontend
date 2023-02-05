const FormularioCliente = ({cliente, ubicaciones}) => {    
    console.log(ubicaciones)
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
                    defaultValue={cliente?.NOMBRE_CLIENTE}
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
                    defaultValue={cliente?.APELLIDO_CLIENTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc_cedula"
                >Cedula/Ruc:</label>
                <input 
                    id="ruc_cedula"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="ruc_cedula"
                    defaultValue={cliente?.RUC_CEDULA_}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="email_cliente"
                >Email:</label>
                <input 
                    id="email_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="email_cliente"
                    defaultValue={cliente?.EMAIL_CLIENTE}
                />
            </div>

            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="estado_cliente"
                >Estado Cliente:</label>
                <input 
                    id="estado_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="estado_cliente"
                    defaultValue={cliente?.ESTADO_CLIENTE}
                />
            </div>
{/* 
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="zona_ubicacion"
                >Zona:</label>
                <input 
                    id="zona_ubicacion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="zona_ubicacion"
                    defaultValue={ubicaciones?.ZONA_UBICACION}
                />
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="sector_ubicacion"
                >Sector:</label>
                <input 
                    id="sector_ubicacion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="sector_ubicacion"
                    defaultValue={ubicaciones?.SECTOR_UBICACION}
                />
            </div> */}

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="sector_ubicacion"
                >Sector-Ubicacion:</label>
                <input 
                    id="sector_ubicacion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="sector_ubicacion"
                    defaultValue={ubicaciones?.SECTOR_UBICACION}
                />
            </div> 


            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="numero_ubicacion"
                >Numero Ubicación:</label>
                <input 
                    id="numero_ubicacion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="numero_ubicacion"
                    defaultValue={ubicaciones?.NUMERO_UBICACION}
                />
            </div>

            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_cliente"
                >Teléfono:</label>
                <input
                    id="telefono_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_cliente"
                    defaultValue={cliente?.TELEFONO_CLIENTE}
                />
            </div>
        </>
    )
}

export default FormularioCliente
