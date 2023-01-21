const Formulario = ({empleado}) => {
    return (
        <>
            <div className="">
                <label
                    className=""
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className=""
                    placeholder="Nombre del empleado"
                    name="nombre"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="apellido"
                >Apellido:</label>
                <input 
                    id="apellido"
                    type="text"
                    className=""
                    placeholder="Apellido del empleado"
                    name="apellido"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="cedula"
                >Cedula:</label>
                <input 
                    id="cedula"
                    type="text"
                    className=""
                    placeholder="Cedula del empleado"
                    name="cedula"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="cargo"
                >Cargo:</label>
                <input 
                    id="cargo"
                    type="text"
                    className=""
                    placeholder="Cargo"
                    name="cargo"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="codigo-cargo"
                >Código del cargo:</label>
                <input 
                    id="codigo-cargo"
                    type="text"
                    className=""
                    placeholder="Código del cargo"
                    name="codigo-cargo"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="sueldo"
                >Sueldo por horas:</label>
                <input
                    id="sueldo"
                    type="text"
                    className=""
                    placeholder="Sueldo por horas"
                    name="suedo"
                />
            </div>
        </>
    )
}

export default Formulario
