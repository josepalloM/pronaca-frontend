import React, {useRef, useState} from "react";

const FormularioActualizarPedido = ({pedido, cliente, empleado}) => {    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const [date, setDate] = useState(formattedDate);
    const [cuenta, setCuenta] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        setDate(e.target.value);
    };

const handleEstado = (e) => {
    if(e.target.value=="ENTREGADO"){
        setCuenta(46)
    }else{
        setCuenta('null')
    }
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
                        // onChange={(event)=>setEmpleados(event.target.value)} 
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
                    <option value={"ENTREGADO"}>ENTREGADO</option>
                </select>
            </div>
            <input 
                id="ID_CUENTA"
                name="ID_CUENTA"
                type={"hidden"}
                value={cuenta}
                readOnly
            />
        </div>
    );
}

export default FormularioActualizarPedido