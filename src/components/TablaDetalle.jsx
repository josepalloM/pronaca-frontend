import { Form, useNavigate, redirect } from "react-router-dom";

function TablaDetalle({ detalle_pedido }) {
  const navigate = useNavigate();
  console.log(detalle_pedido)
  const {
    ID_PEDIDO,
    ID_DETALLE_PEDIDO,
    NOMBRE_ITEM,
    CANTIDAD_PEDIDO,
    SUBTOTAL_DETALLE_PEDIDO,
    PRECIO_DETALLE_PEDIDO,
  } = detalle_pedido;

  console.log('Detallleess',detalle_pedido)
  return (
    <tr className="border-b">
      <td>{NOMBRE_ITEM}</td>
      <td>{CANTIDAD_PEDIDO}</td>
      <td>{SUBTOTAL_DETALLE_PEDIDO}</td>
      <td>{PRECIO_DETALLE_PEDIDO}</td>
    </tr>
  );
}

export default TablaDetalle;