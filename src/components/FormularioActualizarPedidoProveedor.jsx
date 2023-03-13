import React, {useRef, useState} from "react";

const FormularioActualizarPedidoProveedor = ({pedidoProveedor, proveedor}) => {    
    
    const today = new Date(pedidoProveedor.FECHA_PEDIDO_PROVEEDOR);
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
        setCuenta(26)
    }else{
        setCuenta('null')
    }
}

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>Pedido de proveedor:  {pedidoProveedor.ID_PEDIDO_PROVEEDOR}</div><div></div>
            <div className="my-4">Proveedor
                    <input 
                        id="id_proveedor" 
                        name="id_proveedor" 
                        // onChange={(event)=>setClientes(event.target.value)} 
                        className="m-2 form-control w-1/12 border-2 text-center"
                        value={proveedor.ID_PROVEEDOR}
                        readOnly
                        />{proveedor.NOMBRE_PROVEEDOR} {proveedor.TIPO_PROVEEDOR}
                    
            </div>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_PEDIDO_PROVEEDOR"
                    name="FECHA_PEDIDO_PROVEEDOR"
                    defaultValue={date}
                    />
            </div>
            <div>
        <label
          className="flex justify-start text-gray-800"
          htmlFor="SUBTOTAL_PEDIDO_PROVEEDOR"
        >
          Precio:
        </label>
        <input
          id="SUBTOTAL_PEDIDO_PROVEEDOR"
          name="SUBTOTAL_PEDIDO_PROVEEDOR"
          type="text"
          className="block w-full p-3 bg-gray-50"
          value={pedidoProveedor.SUBTOTAL_PEDIDO_PROVEEDOR}
          readOnly
        />
      </div>
      <div>
        <label
          className="flex justify-start text-gray-800"
          htmlFor="TOTAL_PEDIDO_PROVEEDOR"
        >
          Total:
        </label>
        <input
          id="TOTAL_PEDIDO_PROVEEDOR"
          name="TOTAL_PEDIDO_PROVEEDOR"
          type="text"
          className="block w-full p-3 bg-gray-50"
          value={pedidoProveedor.TOTAL_PEDIDO_PROVEEDOR}
          readOnly
        />
      </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ESTADO_PEDIDO_PROVEEDOR"
                >Estado:</label>
                <select
                    id="ESTADO_PEDIDO_PROVEEDOR"
                    name="ESTADO_PEDIDO_PROVEEDOR"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Estado del pedido"
                    onChange={handleEstado}
                    defaultValue={pedidoProveedor?.ESTADO_PEDIDO_PROVEEDOR}
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

export default FormularioActualizarPedidoProveedor