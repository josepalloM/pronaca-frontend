import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";

const FormularioPedido = ({pedido, clientes, empleados}) => {    
    
    const [date, setDate] = useState('');
    const [cliente, setClientes] = useState("")
    const [empleado, setEmpleados] = useState("")
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="my-4"> Seleccione un cliente
            {clientes.length ?(
                    <select 
                        id="id_cliente" 
                        name="id_cliente" 
                        onChange={(event)=>setClientes(event.target.value)} 
                        className="form-control border-2 border-black"
                        >
                        <option >Selecciona una zona</option>
                        {clientes.map(cliente =>(
                            <option key={cliente.ID_CLIENTE} value={cliente.ID_CLIENTE}>{cliente.NOMBRE_CLIENTE}</option>
                        ))}
                    </select>
                    ):(<p> No existen Ubicaciones</p>)}
            </div>
            <div className="my-4"> Seleccione un empleado
            {empleados.length ?(
                    <select 
                        id="id_empleado" 
                        name="id_empleado" 
                        onChange={(event)=>setEmpleados(event.target.value)} 
                        className="form-control border-2 border-black"
                        >
                        <option >Selecciona una zona</option>
                        {empleados.map(empleado =>(
                            <option key={empleado.ID_EMPLEADO} value={empleado.ID_EMPLEADO}>{empleado.NOMBRE_EMPLEADO}</option>
                        ))}
                    </select>
                    ):(<p> No existen Ubicaciones</p>)}
            </div>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_PEDIDO"
                    name="FECHA_PEDIDO"
                />
            </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ESTADO_PEDIDO"
                >Estado:</label>
                <input
                    id="ESTADO_PEDIDO"
                    name="ESTADO_PEDIDO"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Estado del pedido"
                    value={"Pendiente"}
                    readOnly
                />
            </div>
            {/* <div className="my-4"> Seleccione un producto
                <Select options={aux2} id="ID_ITEM" name="ID_ITEM"/>
            </div>
            <div className="my-4">
                <input
                    id="CANTIDAD_ITEMS"
                    name="CANTIDAD_ITEMS"
                    type="number"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Cantidad">
                </input>
            </div> */}
        </div>
    );
}

export default FormularioPedido