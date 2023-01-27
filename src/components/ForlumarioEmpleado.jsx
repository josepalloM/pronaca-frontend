const FormularioEmpleado = ({empleado}) => {    
    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_empleado_potencial"
                >Nombre:</label>
                <input 
                    id="nombre_empleado_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del empleado"
                    name="nombre_empleado_potencial"
                    defaultValue={empleado?.NOMBRE_EMPLEADO_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="apellido_empleado_potencial"
                >Apellido:</label>
                <input 
                    id="apellido_empleado_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del empleado"
                    name="apellido_empleado_potencial"
                    defaultValue={empleado?.APELLIDO_EMPLEADO_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="direccion_empleado_potencial"
                >Dirección:</label>
                <input 
                    id="direccion_empleado_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del empleado"
                    name="direccion_empleado_potencial"
                    defaultValue={empleado?.DIRECCION_EMPLEADO_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc_cedula_empleadopotencial"
                >Cedula/Ruc:</label>
                <input 
                    id="ruc_cedula_empleadopotencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del empleado"
                    name="ruc_cedula_empleadopotencial"
                    defaultValue={empleado?.RUC_CEDULA_EMPLEADO_POTENCIAL}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_empleado_potencial"
                >Teléfono:</label>
                <input
                    id="telefono_empleado_potencial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_empleado_potencial"
                    defaultValue={empleado?.TELEFONO_EMPLEADO_POTENCIAL}
                />
            </div>
        </>
    )
}

export default FormularioEmpleado
