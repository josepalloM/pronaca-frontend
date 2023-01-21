const Formulario = ({empleado}) => {
    return (
        <>
            <div className="">
                <label
                    className=""
                    htmlFor="nombre_empleado"
                >Nombre:</label>
                <input 
                    id="nombre_empleado"
                    type="text"
                    className=""
                    placeholder="Nombre del empleado"
                    name="nombre_empleado"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="apellido_empleado"
                >Apellido:</label>
                <input 
                    id="apellido_empleado"
                    type="text"
                    className=""
                    placeholder="Apellido del empleado"
                    name="apellido_empleado"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="cedula_empleado"
                >Cedula:</label>
                <input 
                    id="cedula_empleado"
                    type="text"
                    className=""
                    placeholder="Cedula del empleado"
                    name="cedula_empleado"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="descripcion_cargo"
                >Cargo:</label>
                <input 
                    id="descripcion_cargo"
                    type="text"
                    className=""
                    placeholder="Cargo"
                    name="descripcion_cargo"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="codigo_cargo"
                >Código del cargo:</label>
                <input 
                    id="codigo_cargo"
                    type="text"
                    className=""
                    placeholder="Código del cargo"
                    name="codigo_cargo"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="sueldo_horas_cargo"
                >Sueldo por horas:</label>
                <input
                    id="sueldo_horas_cargo"
                    type="text"
                    className=""
                    placeholder="Sueldo por horas"
                    name="sueldo_horas_cargo"
                />
            </div>
        </>
    )
}

export default Formulario
