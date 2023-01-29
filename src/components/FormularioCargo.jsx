const FormularioCargo = ({cargo}) => (
    <>
        <div className="">
            <label
                className=""
                htmlFor="descripcion_cargo"
            >Descripción del cargo: </label>
            <input
                id="descripcion_cargo"
                type="text"
                className=""
                placeholder="Descripción del cargo"
                name="descripcion_cargo" /><br></br><br></br>
            <label
                className=""
                htmlFor="sueldo_horas_cargo"
            >Sueldo por horas: </label>
            <input
                id="sueldo_horas_cargo"
                type="text"
                className=""
                placeholder="Sueldo por horas"
                name="sueldo_horas_cargo" />
        </div>
    </>
)

export default FormularioCargo