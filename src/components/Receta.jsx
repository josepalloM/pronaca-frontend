import { Form, useNavigate, redirect} from "react-router-dom"
import { eliminarRecetaProduccion } from "../data/receta_produccion"

export async function action({params}){
    await eliminarRecetaProduccion(params.recetaId)  
    return redirect('/gestorreceta')
}

function Receta_Produccion({receta_produccion}) {

    const navigate = useNavigate()
    const { 
        ID_ITEM, 
        ID_PEDIDO_MATERIAP, 
        NOMBRE_RECETA, 
        DESCRIPCION_RECETA, 
        CATEGORIA_RECETA, 
        TIEMPO_PRODUC_RECETA,
        ID_RECETA,
    } = receta_produccion

    return (
        <tr className="">
            <td>
                {ID_ITEM}
            </td>
            <td>
                {ID_PEDIDO_MATERIAP}
            </td>
            <td>
                {NOMBRE_RECETA}
            </td>
            <td>
                {DESCRIPCION_RECETA}
            </td>
            <td>
                {CATEGORIA_RECETA}
            </td>
            <td>
                {TIEMPO_PRODUC_RECETA}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/receta/${ID_RECETA}/actualizar`)}
                        >Editar
                </button>
                
                <Form 
                    method='POST'
                    action={`/receta/${ID_RECETA}/eliminar`}
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

export default Receta_Produccion