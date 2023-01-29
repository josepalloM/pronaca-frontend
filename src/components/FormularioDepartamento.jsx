const FormularioDepartamento = ({departamento}) => (
    <>
        <div className="">
            <label
                className=""
                htmlFor="nombre_departamento"
            >Nombre Departamento: </label>
            <input
                id="nombre_departamento"
                type="text"
                className=""
                placeholder="Nombre del departamento"
                name="nombre_departamento" />
        </div><br></br>
    </>
)

export default FormularioDepartamento