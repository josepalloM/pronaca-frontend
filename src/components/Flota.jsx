import { Form, useNavigate, redirect } from "react-router-dom";
import { currencyFormatter } from '../utils/formatters';
import { obtenerFlota, eliminarFlota, disminuirCantidad } from "../data/flotas";
import { actualizarEstados } from "../data/pedidos";
import {} from "../data/flotas";

export async function action({ params }) {
    console.log("ID eliminar flota ", params.flotaId);
    const flota = await obtenerFlota(params.flotaId)
    const transporteId = flota.ID_TRANSPORTE
    await eliminarFlota(params.flotaId)
    return redirect(`/flota/${transporteId}`)
}

function Flota({ flota, pedidos }) {
    const navigate = useNavigate()
    const {
        ID_FLOTA,
        ID_TRANSPORTE,
        SECTOR_FLOTA,
        ESTADO_FLOTA,
        CANTIDAD_PEDIDOS_FLOTA,
        CAPACIDAD_FLOTA,
        COSTO_FLOTA

    } = flota

    const handleEditar = () => {
        if(CANTIDAD_PEDIDOS_FLOTA===CAPACIDAD_FLOTA){
          alert("El vehículo está entregando los pedidos")
        }else{
          navigate(`/flota/${ID_FLOTA}/editar`)
        }
      }

    function handleEliminar(){
        return CANTIDAD_PEDIDOS_FLOTA===CAPACIDAD_FLOTA;
    }

    function pedidosPorFlota(){
        const pedidosFlota = pedidos.filter(pedidos => pedidos.ID_FLOTA==ID_FLOTA && pedidos.ESTADO_PEDIDO=="EN CAMINO")
        console.log(pedidosFlota)
        // actualizarEstados(pedidosFlota.ID_PEDIDO)
        for (var i = 0; i < pedidosFlota.length; i++) {
            actualizarEstados(pedidosFlota[i].ID_PEDIDO);
            disminuirCantidad(ID_FLOTA, flota)
          }
    }

    return (
        <tr className="border-b text-center">
            <td className="">
                {ID_FLOTA}
            </td>
            <td className="">
                {SECTOR_FLOTA}
            </td>
            <td className="p-1">
                {ESTADO_FLOTA}
            </td>
            <td className="p-1">
                {CANTIDAD_PEDIDOS_FLOTA}/{CAPACIDAD_FLOTA}
            </td>
            <td className="p-1">
                {currencyFormatter.format(COSTO_FLOTA)}
            </td>

            <td className="p-4 flex justify-center gap-3">
                <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        // onClick={() => navigate(`/flota/${ID_FLOTA}/editar`)}
                        onClick={pedidosPorFlota}
                    >Entregar</button>
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    // onClick={() => navigate(`/flota/${ID_FLOTA}/editar`)}
                    onClick={handleEditar}
                >Editar</button>

                <Form
                    method='post'
                    action={`/flota/${ID_FLOTA}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este flota?')) {
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type="submit"
                        disabled={handleEliminar()}
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs disabled:text-gray-400"
                    >Eliminar</button>
                </Form>

            </td>
        </tr>


    )
}

export default Flota