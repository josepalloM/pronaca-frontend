import { Form, useNavigate, redirect } from "react-router-dom";
import { eliminarDetalle_Pedido } from "../data/detalle_pedidos.js";

export async function action({ params }) {
  console.log("ID eliminar pedido ", params.detalle_pedidoId);
  await eliminarDetalle_Pedido(params.detalle_pedidoId);
  return redirect("/opciones/detalle_pedidos");
}

function Detalle_pedido({ detalle_pedido }) {
  const navigate = useNavigate();
  console.log(detalle_pedido)
  const {
    ID_PEDIDO,
    NOMBRE_ITEM,
    CANTIDAD_PEDIDO,
    SUBTOTAL_DETALLE_PEDIDO,
    PRECIO_DETALLE_PEDIDO,
  } = detalle_pedido;

  return (
    <tr className="border-b">
      <td className="">{ID_PEDIDO}</td>
      <td>{NOMBRE_ITEM}</td>
      <td>{CANTIDAD_PEDIDO}</td>
      <td>{SUBTOTAL_DETALLE_PEDIDO}</td>
      <td>{PRECIO_DETALLE_PEDIDO}</td>
    </tr>
  );
}

export default Detalle_pedido;
