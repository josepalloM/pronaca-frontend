
import { Link, useLoaderData } from "react-router-dom";
import { useState, useRef } from "react"

const FormularioListaItem = ({ listaItem }) => {

    const [tipo_lista,setTipo_lista] = useState('');
    let Id_Empleado = listaItem?.Id_Empleado(1);
    //const Id_Empleado = listaItem?.Id_Empleado(1);
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };
    //listaItem?.ID_CUENTA = 20;

    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                {/*<div className="mb-4">
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
                        defaultValue={listaItem?.ID_EMPLEADO}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_cuenta"
                    >Id cuenta: </label>
                    <select id="id_cuenta" value={cuentas} name="cuentas"
                        onChange={(event) =>
                            setCuentas(event.target.value)} className="form-control border-2 border-black">
                        <option >Selecciona una Cuenta</option>
                        <option value={1}>Balance General</option>
                        <option value={2}>Estado de resultados</option>
                    </select>
                    <input
                        id="id_cuenta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Cuenta"
                        name="id_cuenta"
                        defaultValue={listaItem?.ID_CUENTA}
                    />

                </div>*/}
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_tipo_lista_produc"
                    >Tipo Lista procucto: </label>
                    <select id="id_tipo_lista_produc" value={tipo_lista} name="id_tipo_lista_produc"
                        //defaultValue={listaItem?.ID_TIPO_LISTA_PRODUC}
                        onChange={(event) =>
                            setTipo_lista(event.target.value)} 
                            className="form-control border-2 border-black">
                        <option >Selecciona el Tipo de lista</option>
                        <option value={1}>Materia Prima</option>
                        <option value={2}>Productos Produccion</option>
                    </select>
                    {/*<input
                        id="id_tipo_lista_produc"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Tipo Lista procucto"
                        name="id_tipo_lista_produc"
                        defaultValue={listaItem?.ID_TIPO_LISTA_PRODUC}
                    />*/}

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
                        defaultValue={listaItem?.DETALLE_LISTA}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha_lista"
                    >Fecha Lista: </label>
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
                    >Estado Lista: </label>
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
                    >Destalle Estado Lista: </label>
                    <input
                        id="detalle_estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Destalle Estado Lista"
                        name="detalle_estado_lista"
                        defaultValue={listaItem?.DETALLE_ESTADO_LISTA}
                    />
                </div>
            </div>
        </>

    )
}

export default FormularioListaItem