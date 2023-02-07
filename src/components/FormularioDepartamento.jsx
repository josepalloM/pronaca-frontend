import { useState } from "react"

const FormularioDepartamento = ({ cuentas }) => {

    const [value, setValue] = useState("")

    return (
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
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="sueldo_fijo"
                >Sueldo fijo: </label>
                <input
                    id="sueldo_fijo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Sueldo fijo"
                    name="sueldo_fijo" />

                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_departamento"
                    >Cuenta asociada:</label>
                    <div className="">
                        {cuentas.length ? (
                            <select id="id_cuenta" value={value} name="id_cuenta"
                                onChange={(event) => setValue(event.target.value)} className="border border-gray-500 rounded py-2 px-3 block w-full appearance-none leading-tight focus:outline-none focus:bg-white">
                                <option >Selecciona una cuenta</option>
                                {cuentas.filter(cuenta => cuenta.CUE_ID_CUENTA === 6 || cuenta.CUE_ID_CUENTA === 7).map(cuenta => (
                                    <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.DESCRIPCION_CUENTA}</option>

                                ))}
                            </select>

                        ) : (<p> No existe CUENTAS</p>)}
                    </div>
                </div>
            </div><br></br>
        </>
    )
}

export default FormularioDepartamento