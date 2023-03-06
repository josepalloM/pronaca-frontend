const FormularioActualizarCargo = ({ cargo }) => {

    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="descripcion_cargo"
                >Nombre:</label>
                <input
                    id="descripcion_cargo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Descripción del cargo"

                    defaultValue={cargo[0]?.DESCRIPCION_CARGO}
                    name="descripcion_cargo"

                /// add
                />
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="codigo_cargo"
                >Código del cargo:</label>
                <input
                    id="codigo_cargo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Sueldo por horas"
                    name="codigo_cargo"
                    /// add
                    defaultValue={cargo[0]?.CODIGO_CARGO}

                />
            </div>



        </>
    )
}

export default FormularioActualizarCargo
