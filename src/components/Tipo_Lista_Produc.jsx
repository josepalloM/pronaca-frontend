import { Form, useNavigate, redirect} from "react-router-dom"
import { eliminarTipoListaProduc } from "../data/tipo_lista_produc"

export async function action({params}){
    await eliminarTipoListaProduc(params.tipolistaId)
    
    return redirect('/gestortipolista')
}

function TipoListaProduc({tipo_lista_produc}) {

    const navigate = useNavigate()
    const {
        ID_TIPO_LISTA_PRODUC,
        TIPO_LISTA_ITEMS,
        DETALLE_TIPO_LISTA,
    } = tipo_lista_produc

    return (
        <tr className="">
            <td>
                {ID_TIPO_LISTA_PRODUC}
            </td>
            <td>
                {TIPO_LISTA_ITEMS}
            </td>
            <td>
                {DETALLE_TIPO_LISTA}
            </td>            
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/tipolista/${ID_TIPO_LISTA_PRODUC}/actualizar`)}>Editar
                </button>
                
                <Form 
                    method='POST'
                    action={`/listaitem/${ID_TIPO_LISTA_PRODUC}/eliminar`}
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

export default TipoListaProduc