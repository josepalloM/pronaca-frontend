const FormularioLogin = () => (
    <>
        <div className="mb-4">
            <label
                className="flex justify-start text-gray-800"
                htmlFor="usuario"
            >Usuario: </label>
            <input
                id="usuario"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Usuario"
                name="usuario" />
            <label
                className="flex justify-start text-gray-800"
                htmlFor="contrasenia"
            >Contraseña </label>
            <input
                id="contrasenia"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Contraseña"
                name="contrasenia" />
        </div><br></br>
    </>
)

export default FormularioLogin