const FormularioDepartamento = ({ departamento }) => (
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
            <label
                className="flex justify-start text-gray-800"
                htmlFor="sueldo_horas"
            >Sueldo por horas: </label>
            <input
                id="sueldo_horas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Sueldo por horas"
                name="sueldo_horas" />
        </div><br></br>
    </>
)

export default FormularioDepartamento