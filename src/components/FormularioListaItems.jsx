
import { Link, useLoaderData } from "react-router-dom";
import { useState, useRef } from "react"

const FormularioListaItem = ({ listaItem }) => {

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4" hidden>
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
                        defaultValue={1}
                    />
                </div>
                {/*<div className="mb-4" hidden>
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_cuenta"
                    >Id cuenta: </label>
                    <input
                        id="id_cuenta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Cuenta"
                        name="id_cuenta"
                        defaultValue={20} //id cuenta de gastos
                    />

                </div>*/}
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_lista"
                    >Detalle: </label>
                    <input
                        id="detalle_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Detalle Lista"
                        name="detalle_lista"
                        defaultValue={listaItem?.DETALLE_LISTA}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha_lista"
                    >Fecha: </label>
                     <input
                    type='date'
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="fecha_lista"
                    name="fecha_lista"
                />
                    {/*<input
                        id="fecha_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejmplo: aaaa-mm-dd"
                        name="fecha_lista"
                        defaultValue={listaItem?.FECHA_LISTA}
                    />*/}
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="estado_lista"
                    >Estado de la Lista: </label>
                    <input
                        id="estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Estado Lista"
                        name="estado_lista"
                        defaultValue={listaItem?.ESTADO_LISTA}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_estado_lista"
                    >Informacion del Estado: </label>
                    <input
                        id="detalle_estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Destalle Estado Lista"
                        name="detalle_estado_lista"
                        defaultValue={listaItem?.DETALLE_ESTADO_LISTA}
                    />
                </div>
                {/*<div visible='false'>
                    <input 
                    id='id_cuenta' 
                    name='id_cuenta'
                    value={20}
                    />
                </div>*/}
            </div>
        </>

    )
}

export default FormularioListaItem