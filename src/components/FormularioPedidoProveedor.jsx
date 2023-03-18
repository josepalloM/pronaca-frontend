import Select from "react-select";
import React, { useRef, useState } from "react";

const FormularioPedidoProveedor = ({ pedidoProveedor, proveedores, items }) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  const [date, setDate] = useState(formattedDate);
  const [proveedor, setProveedor] = useState("");
  const [detalle, setDetalle] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [total, setTotal] = useState(0);
  const [inputMayus, setInputMayus] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const mayus = (e) => {
    const valor = e.target.value;
    setInputMayus(valor.toUpperCase());
  };
  const quitar = (event) => {
    if (cantidad <= 0) {
      setCantidad(0);
    } else {
      setCantidad(cantidad - 1);
    }
  };
  const agregar = (event) => {
    setCantidad(cantidad + 1);
  };

   const handleDetalleChange = (event) => {
    const value = event.target.value;
    setDetalle(value);

    switch (value) {
      case "CARNE FRESCA":
        setPrecio(22)
        setTotal(25)
        break;
      case "CARNE LISTA PARA POLLO":
        setPrecio(5.016)
        setTotal(5.70)
        break;
      case "CARNE LISTA PARA CHULETA":
        setPrecio(1.76)
        setTotal(2)
        break;
      case "INSUMOS":
        setPrecio(0.44)
        setTotal(0.5)
      default:
        alert("Elija un item")
    }
  }


  return (
    <div className="grid grid-cols-2 gap-4">
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
      <div></div>
      {/* <div></div> */}
      <div className="my-4 ">
        Seleccione un proveedor
        {proveedores?.length ? (
          <select
            id="id_proveedor"
            name="id_proveedor"
            onChange={(event) => setProveedor(event.target.value)}
            className="form-control border-2 border-black"
          >
            <option>Selecciona un proveedor</option>
            {proveedores.map((proveedor) => (
              <option
                key={proveedor.ID_PROVEEDOR}
                value={proveedor.ID_PROVEEDOR}
              >
                {proveedor.NOMBRE_PROVEEDOR} {proveedor.TIPO_PROVEEDOR}
              </option>
            ))}
          </select>
        ) : (
          <p> No existen proveedores</p>
        )}
      </div>
      
      <div className="my-4 ">
        <label
          className="flex justify-start text-gray-800"
          htmlFor="DETALLE_PEDIDO_PROVEEDOR"
        >
          Detalle:
        </label>
        {/* ///// */}

        {items.length ? (
          <select
            id="DETALLE_PEDIDO_PROVEEDOR"
            name="DETALLE_PEDIDO_PROVEEDOR"
            onChange={handleDetalleChange}
            className="form-control border-2 border-black"
          >
            <option>Selecciona un producto</option>
            {items.filter(items => items.ID_TIPO_ITEM == 1 || items.ID_TIPO_ITEM == 4).map((item) => (
              <option
                key={item.ID_ITEM}
                value={item.NOMBRE_ITEM}
              >
                {item.NOMBRE_ITEM}
              </option>
            ))}
          </select>
        ) : (
          <p> No existen items</p>
        )}
      </div>
      <div className="my-4">
        <label
          className="flex justify-start text-gray-800"
        >
          Precio:
        </label>
        <input
          type="text"
          className="block w-full p-3 bg-gray-50"
          value={precio}
          readOnly
        />
      </div>
      <input
        type={"hidden"}
        id="ESTADO_PEDIDO_PROVEEDOR"
        name="ESTADO_PEDIDO_PROVEEDOR"
        value={"PENDIENTE"}
      />
      <div className="grid-cols-3 flex items-center">
        <div
          className="flex bg-red-500 w-1/3 m-1 rounded justify-center"
          onClick={quitar}
        >
          -
        </div>
        <input
          id="CANTIDAD_PEDIDO"
          name="CANTIDAD_PEDIDO"
          type="number"
          min={0}
          max={1000}
          className="flex w-1/2 p-3 m-1 bg-gray-200 rounded text-center"
          onChange={(event) => setCantidad(event.target.valueAsNumber)}
          value={cantidad}
        />
        <div
          className="flex bg-green-500 w-1/3 m-1 rounded justify-center"
          onClick={agregar}
        >
          +
        </div>
      </div>
      <div>
        <label
          className="flex justify-start text-gray-800"
          htmlFor="SUBTOTAL_PEDIDO_PROVEEDOR"
        >
          Subtotal:
        </label>
        <input
          id="SUBTOTAL_PEDIDO_PROVEEDOR"
          name="SUBTOTAL_PEDIDO_PROVEEDOR"
          type="text"
          className="block w-full p-3 bg-gray-50"
          value={precio*cantidad}
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
          value={total*cantidad}
          readOnly
        />
      </div>
    </div>
  );
};

export default FormularioPedidoProveedor;
