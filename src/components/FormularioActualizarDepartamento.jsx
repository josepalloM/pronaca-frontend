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

        </>
    )
}

export default FormularioActualizarDepartamento
