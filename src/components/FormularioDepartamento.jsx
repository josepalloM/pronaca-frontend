import { useState } from "react"

const FormularioDepartamento = ({ cuentas }) => {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

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
                    htmlFor="codigo_cuenta"
                >Código de Cuenta: </label>
                <input
                    id="codigo_cuenta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Código de la cuenta"
                    name="codigo_cuenta" />

                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_cuenta"
                    >Cuenta asociada:</label>
                    <div className="">
                        {cuentas.length ? (
                            <select id="id_cuenta" value={value} name="id_cuenta"
                                onChange={(event) => {
                                    setValue(event.target.value);
                                    const selectedCuenta = cuentas.find(cuenta => cuenta.ID_CUENTA === parseInt(event.target.value));
                                    setDescription(selectedCuenta.DESCRIPCION_CUENTA);
                                }}
                                className="border border-gray-500 rounded py-2 px-3 block w-full appearance-none leading-tight focus:outline-none focus:bg-white">
                                <option >Selecciona una cuenta</option>
                                {cuentas.filter(cuenta => cuenta.DESCRIPCION_CUENTA === "Costos operativos" || cuenta.DESCRIPCION_CUENTA === "Gastos nómina").map(cuenta => (
                                    <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.CODIGO_CUENTA} {cuenta.DESCRIPCION_CUENTA}</option>
                                ))}
                            </select>

                        ) : (<p> No existe CUENTAS</p>)}
                    </div>
                    <div className="">
                        {cuentas.length ? (
                            <input
                            id="cuenta"
                            type="text"
                            value={description}
                            name="cuenta"
                            onChange={(event) => setDescription(event.target.value)}
                            style={{ display: 'none' }} />

                        ) : (<p> No existe CUENTAS</p>)}
                    </div>
                </div>
            </div><br></br>
        </>
    )
}

export default FormularioDepartamento