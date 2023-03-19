import { useState } from "react";
import { Link, Form, useNavigate, redirect } from "react-router-dom";
import { currencyFormatter } from "../utils/formatters";
import moment from "moment";
import { eliminarPedidoProveedor } from "../data/pedidosProveedor";

export async function action({ params }) {
  console.log("ID eliminar pedido de proveedor ", params.pedidoProveedorId);
  await eliminarPedidoProveedor(params.pedidoProveedorId);
  return redirect("proveedoresOpciones/pedidosProveedor");
}

function PedidoProveedor({ pedidoProveedor }) {
  const navigate = useNavigate();
  const {
    ID_PEDIDO_PROVEEDOR,
    ID_CUENTA,
    ID_PROVEEDOR,
    NOMBRE_PROVEEDOR,
    FECHA_PEDIDO_PROVEEDOR,
    DETALLE_PEDIDO_PROVEEDOR,
    ESTADO_PEDIDO_PROVEEDOR,
    CANTIDAD_PEDIDO,
    SUBTOTAL_PEDIDO_PROVEEDOR,
    TOTAL_PEDIDO_PROVEEDOR
  } = pedidoProveedor;

  const [deleteVar, setDeleteVar] = useState(false)

  const handleEditar = () => {
    if(ESTADO_PEDIDO_PROVEEDOR=="ENTREGADO"){
      alert("El pedido ya ha sido entregado")
    }else{
      navigate(`/proveedoresOpciones/pedidoProveedor/${ID_PEDIDO_PROVEEDOR}/editar`)
    }
  }

  function handleEliminar(){
    if(ESTADO_PEDIDO_PROVEEDOR=="ENTREGADO"){
      return(true)
    }else{
      return(false)
    }
  }

  return (
    <tr className="border-b text-center p-1">
      {/* <td className="">{ID_PEDIDO_PROVEEDOR}</td> */}
      <td>{NOMBRE_PROVEEDOR}</td>
      <td>
        {moment(FECHA_PEDIDO_PROVEEDOR).format("YYYY-MM-DD")}
      </td>
      <td>
        {DETALLE_PEDIDO_PROVEEDOR}
      </td>
      <td>{CANTIDAD_PEDIDO}</td>
      <td>{ESTADO_PEDIDO_PROVEEDOR}</td>
      <td>{currencyFormatter.format(SUBTOTAL_PEDIDO_PROVEEDOR)}</td>
      <td>{currencyFormatter.format(TOTAL_PEDIDO_PROVEEDOR)}</td>
      <td className="p-4 flex justify-center gap-3">

        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={handleEditar}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/pedidosProveedor/${ID_PEDIDO_PROVEEDOR}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            disabled={handleEliminar()}
            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs disabled:text-gray-400"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default PedidoProveedor;
