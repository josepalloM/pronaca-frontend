import { Link, Form, useNavigate, redirect } from "react-router-dom";
import { eliminarPedido } from "../data/pedidos.js";

export async function action({ params }) {
  console.log("ID eliminar pedido ", params.pedidoId);
  await eliminarPedido(params.pedidoId);
  return redirect("/opciones/pedidos");
}

function Pedido({ pedido }) {
  const navigate = useNavigate();
  const {
    FECHA_PEDIDO,
    NOMBRE_EMPLEADO,
    APELLIDO_EMPLEADO,
    NOMBRE_CLIENTE,
    APELLIDO_CLIENTE,
    ESTADO_PEDIDO,
    ID_PEDIDO,
  } = pedido;

  return (
    <tr className="border-b">
      <td className="">{ID_PEDIDO}</td>
      <td>{FECHA_PEDIDO}</td>
      <td>
        {NOMBRE_EMPLEADO} {APELLIDO_EMPLEADO}
      </td>
      <td>
        {NOMBRE_CLIENTE} {APELLIDO_CLIENTE}
      </td>
      <td>{ESTADO_PEDIDO}</td>
      <td className="p-4 flex justify-center gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
        >
          <Link state={location.state} to={`/opciones/detalle_pedidos/${ID_PEDIDO}`}>
            Ver
          </Link>
        </button>

        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/pedido/${ID_PEDIDO}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/opciones/pedidos/${ID_PEDIDO}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Pedido;
