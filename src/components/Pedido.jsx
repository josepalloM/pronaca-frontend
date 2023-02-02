import {Form, useNavigate, redirect} from "react-router-dom";
import {eliminarPedido} from "../data/pedidos.js";

export async function action({params}){
    await eliminarPedido(params.pedidoId)
    
    return redirect('/')
}

function Pedido({ pedido }) {
    console.log(pedido)
    const navigate = useNavigate()
    const {
        FECHA_PEDIDO,
        PEDIDO_DEVUELTO,
        ESTADO_PEDIDO,
        ID_PEDIDO,
    } = pedido

    return (
  
            <tr className="border-b">
                <td className="">
                    {FECHA_PEDIDO}
                </td>
                <td>
                    {PEDIDO_DEVUELTO}
                </td>
                <td>
                    {ESTADO_PEDIDO}
                </td>
                <td className="p-4 flex justify-center gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/pedido/${ID_PEDIDO}/editar`)}
                    >Editar</button>

                    <Form
                        method='post'
                        action={`/pedido/${ID_PEDIDO}/eliminar`}
                        onSubmit={ (e) => {
                            if (!confirm('¿Deseas eliminar este registro?')){
                                e.preventDefault()
                            }
                        }}
                    >
                         <button
                        type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Eliminar</button>
                    </Form>
                   
                </td>
            </tr>


    )
}

export default Pedido