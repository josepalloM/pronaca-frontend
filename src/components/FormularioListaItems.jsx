import { useState } from "react"

const FormularioListaItem = ({listaItem, cuentas}) => {

    const [value, setValue] = useState('');
    
    return(
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_empleado"
                    >Id Empleado: </label>
                    <input
                        id="id_empleado"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Empleado"
                        name="id_empleado"
                        defaultValue = {listaItem?.ID_EMPLEADO}
                        />
                </div>
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
                                }}
                                className="border border-gray-500 rounded py-2 px-3 block w-full appearance-none leading-tight focus:outline-none focus:bg-white">
                                <option >Selecciona una cuenta</option>
                                {cuentas.filter(cuenta => cuenta.CUE_ID_CUENTA === 6).map(cuenta => (
                                    <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.CODIGO_CUENTA} {cuenta.DESCRIPCION_CUENTA}</option>
                                ))}
                            </select>

                        ) : (<p> No existe CUENTAS</p>)}
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_tipo_lista_produc"
                    >Id Tipo Lista procucto: </label>
                    <input
                        id="id_tipo_lista_produc"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Tipo Lista procucto"
                        name="id_tipo_lista_produc" 
                        defaultValue = {listaItem?.ID_TIPO_LISTA_PRODUC}
                        />
                        
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_lista"
                    >Detalle Lista: </label>
                    <input
                        id="detalle_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Detalle Lista"
                        name="detalle_lista" 
                        defaultValue = {listaItem?.DETALLE_LISTA}
                        />
                        
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha_lista"
                    >Fecha Lista: </label>
                    <input
                        id="fecha_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejmplo: aaaa-mm-dd"
                        name="fecha_lista" 
                        defaultValue={listaItem?.FECHA_LISTA}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="estado_lista"
                    >Estado Lista: </label>
                    <input
                        id="estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Estado Lista"
                        name="estado_lista" 
                        defaultValue = {listaItem?.ESTADO_LISTA}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_estado_lista"
                    >Destalle Estado Lista: </label>
                    <input
                        id="detalle_estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Destalle Estado Lista"
                        name="detalle_estado_lista" 
                        defaultValue = {listaItem?.DETALLE_ESTADO_LISTA}
                        />
                </div>
            </div>
        </>

    )
}

export default FormularioListaItem