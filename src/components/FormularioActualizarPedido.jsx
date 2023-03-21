import React, {useRef, useState} from "react";

const FormularioActualizarPedido = ({pedido, cliente, empleado, flotas}) => {    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const [date, setDate] = useState(formattedDate);
    const [cuenta, setCuenta] = useState();
    const [selectedFlota, setSelectedFlota] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

    const handleEstado = (e) => {
        // if(e.target.value=="ENTREGADO"){
        //     setCuenta(46)
        // }else{
        //     setCuenta()
        // }
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>Pedido:  {pedido.ID_PEDIDO}</div><div></div>
            <div className="my-4">Cliente
                    <input 
                        id="id_cliente" 
                        name="id_cliente" 
                        // onChange={(event)=>setClientes(event.target.value)} 
                        className="m-2 form-control w-1/12 border-2 text-center"
                        value={cliente.ID_CLIENTE}
                        readOnly
                        />{cliente.NOMBRE_CLIENTE} {cliente.APELLIDO_CLIENTE}
                    
            </div>
            <div className="my-4"> Empleado

                    <input 
                        id="id_empleado" 
                        name="id_empleado" 
                        className="m-2 form-control w-1/12 border-2 text-center"
                        value={empleado.ID_EMPLEADO}
                        readOnly
                        />{empleado.NOMBRE_EMPLEADO} {empleado.APELLIDO_EMPLEADO}

            </div>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_PEDIDO"
                    name="FECHA_PEDIDO"
                    defaultValue={date}
                />
            </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ESTADO_PEDIDO"
                >Estado:</label>
                <select
                    id="ESTADO_PEDIDO"
                    name="ESTADO_PEDIDO"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Estado del pedido"
                    onChange={handleEstado}
                    defaultValue={pedido?.ESTADO_PEDIDO}
                >
                    <option>Seleccione un estado</option>
                    <option value={"PENDIENTE"}>PENDIENTE</option>
                    <option value={"ASIGNADO"}>ASIGNADO</option>
                    <option value={"EN CAMINO"}>EN CAMINO</option>
                    <option value={"ENTREGADO"}>ENTREGADO</option>
                </select>
            </div>
            {/* FLOTAS */}
            
            {/* <div className="my-4"> Seleccione un cliente
            {flotas.length ?(
                    <select 
                        id="IF_FLOTA" 
                        name="ID_FLOTA" 
                        onChange={(event)=>setFlota(event.target.value)} 
                        className="form-control border-2 border-black"
                        >
                        <option >Selecciona la flota de entrega</option>
                        {flotas.map(flota =>(
                            <option key={flota.ID_FLOTA} value={flota.ID_FLOTA}>{flota.NOMBRE_TRANSPORTE} {flota.CANTIDAD_PEDIDOS_FLOTA} {flota.CAPACIDAD_FLOTA}</option>
                        ))}
                    </select>
                    ):(<p> No existen Clientes</p>)}
            </div> */}

            <div className="col-span-2">
            <p className="rounded-md md: w-11/12 mx-auto py-2 mt-2">Seleccione una flota:</p>
            {flotas.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                <thead className="bg-black text-white">
                    <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Cantidad de Pedidos</th>
                    <th className="px-4 py-2">Capacidad</th>
                    <th className="px-4 py-2">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {flotas.filter(flotas => flotas.SECTOR_FLOTA == cliente.ZONA_UBICACION && flotas.ESTADO_FLOTA == "ACTIVO").map((flota) => (
                    <tr
                        key={flota.ID_FLOTA}
                        className={`${
                        flota.ID_FLOTA === selectedFlota ? "bg-amber-200" : ""
                        }`}
                    >
                        <td className="border px-4 py-2">{flota.NOMBRE_TRANSPORTE}</td>
                        <td className="border px-4 py-2">{flota.CANTIDAD_PEDIDOS_FLOTA}</td>
                        <td className="border px-4 py-2">{flota.CAPACIDAD_FLOTA}</td>
                        <td className="border px-4 py-2">
                        <input
                            type={"button"}
                            onClick={() => setSelectedFlota(flota.ID_FLOTA)}
                            className="bg-orange-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded"
                            value={'Seleccionar'}
                        >
                            
                        </input>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            ) : (
                <p>No existen flotas</p>
            )}
            </div>


            {/* CUENTA VENTAS */}
            <input 
                id="ID_FLOTA"
                name="ID_FLOTA"
                type={"hidden"}
                value={selectedFlota}
                readOnly
            />
        </div>
    );
}

export default FormularioActualizarPedido