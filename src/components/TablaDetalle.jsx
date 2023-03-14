import { Form, useNavigate, redirect } from "react-router-dom";
import { currencyFormatter } from "../utils/formatters"; '../utils/formatters.js'

function TablaDetalle({ detalle_pedido }) {
  const navigate = useNavigate();

  const {
    ID_PEDIDO,
    ID_DETALLE_PEDIDO,
    NOMBRE_ITEM,
    PESO_ITEM,
    UNIDAD_MEDIDA,
    CANTIDAD_PEDIDO,
    SUBTOTAL_DETALLE_PEDIDO,
    PRECIO_DETALLE_PEDIDO,
  } = detalle_pedido;

  return (
    <tr className="border-b">
      <td>{NOMBRE_ITEM}<br/>Peso: {PESO_ITEM} {UNIDAD_MEDIDA}</td>
      <td>{CANTIDAD_PEDIDO}</td>
      <td>{currencyFormatter.format(SUBTOTAL_DETALLE_PEDIDO)}</td>
      <td>{currencyFormatter.format(PRECIO_DETALLE_PEDIDO)}</td>
    </tr>
  );
}

export default TablaDetalle;