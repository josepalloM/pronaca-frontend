const FormularioActualizarDepartamento = ({ departamento }) => {

    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_departamento"
                >Nombre:</label>
                <input
                    id="nombre_departamento"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del departamento"

                    defaultValue={departamento[0]?.NOMBRE_DEPARTAMENTO}
                    name="nombre_departamento"

                /// add
                />
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="sueldo_horas"
                >Sueldo por horas:</label>
                <input
                    id="sueldo_horas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Sueldo por horas"
                    name="sueldo_horas"
                    /// add
                    defaultValue={departamento[0]?.SUELDO_HORAS}

                />
            </div>



        </>
    )
}

export default FormularioActualizarDepartamento
