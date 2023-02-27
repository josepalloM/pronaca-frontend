import { Form, useNavigate, redirect } from "react-router-dom";
import { eliminarPedido } from "../data/pedidos.js";

export async function action({ params }) {
  console.log("ID eliminar pedido ", params.pedidoId);
  await eliminarPedido(params.pedidoId);
  return redirect("/opciones/pedidos");
}

function Detalle_pedido({ detalle_pedido }) {
  const navigate = useNavigate();
  const { ID_PEDIDO, ID_ITEM, CANTIDAD_PEDIDO, PRECIO_DETALLE_PEDIDO } =
    detalle_pedido;

  return (
    <tr className="border-b">
      <td className="">{ID_PEDIDO}</td>
      <td>{ID_ITEM}</td>
      <td>{CANTIDAD_PEDIDO}</td>
      <td>{PRECIO_DETALLE_PEDIDO}</td>
      <td className="p-4 flex justify-center gap-3">
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

export default Detalle_pedido;
