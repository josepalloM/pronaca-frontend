import { Form, useNavigate, redirect} from "react-router-dom"
import { eliminarListaItem } from "../data/items"

export async function action({params}){
    await eliminarListaItem(params.listaId)
    
    return redirect('/gestorlista')
}

function Item({ listaItem}) {

    const navigate = useNavigate()
    const {ID_LISTA_ITEMS, ID_EMPLEADO, ID_CUENTA, ID_TIPO_LISTA_PRODUC, DETALLE_LISTA, FECHA_LISTA, ESTADO_LISTA, DETALLE_ESTADO_LISTA,} = listaItem

    return (
        <tr className="">
            <td>
                {ID_EMPLEADO}
            </td>
            <td>
                {ID_CUENTA}
            </td>
            <td>
                {ID_TIPO_LISTA_PRODUC}
            </td>
            <td>
                {DETALLE_LISTA}
            </td>
            <td>
                {FECHA_LISTA}
            </td>
            <td>
                {ESTADO_LISTA}
            </td>
            <td>
                {DETALLE_ESTADO_LISTA}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/listaitem/${ID_LISTA_ITEMS}/actualizar`)}>Editar
                </button>
                
                <Form 
                    method='POST'
                    action={`/listaitem/${ID_LISTA_ITEMS}/eliminar`}
                    onSubmit={ (e) => {
                        if (!confirm('¿Deseas eliminar este registro?')){
                            e.preventDefault()
                        }
                    }}
                >
                <button type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Eliminar</button>
                </Form>
            </td>
        </tr>
    )
}

export default Item