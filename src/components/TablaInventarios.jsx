import { Form, useNavigate, redirect } from "react-router-dom";
import { currencyFormatter } from "../utils/formatters";

function TablaInventarios({ cuenta }) {
  const navigate = useNavigate();
  const {
    CODIGO_CUENTA,
    DESCRIPCION_CUENTA,
    VALOR_CUENTA,
  } = cuenta;

  return (
    <tr className="border-b">
      <td>{CODIGO_CUENTA}</td>
      <td>{DESCRIPCION_CUENTA}</td>
      <td>{currencyFormatter.format(VALOR_CUENTA)}</td>
    </tr>
  );
}

export default TablaInventarios;