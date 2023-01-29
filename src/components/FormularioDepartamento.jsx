const FormularioDepartamento = ({departamento}) => (
    <>
        <div className="mb-4">
            <label
                className="flex justify-start text-gray-800"
                htmlFor="nombre_departamento"
            >Nombre Departamento: </label>
            <input
                id="nombre_departamento"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del departamento"
                name="nombre_departamento" />
        </div><br></br>
    </>
)

export default FormularioDepartamento