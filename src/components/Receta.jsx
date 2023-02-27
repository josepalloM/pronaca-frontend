import { Form, useNavigate, redirect} from "react-router-dom"
import { eliminarRecetaProduccion } from "../data/receta_produccion"

export async function action({params}){
    await eliminarRecetaProduccion(params.recetaId)  
    return redirect('/gestorreceta')
}

function Receta_Produccion({receta_produccion}) {

    const navigate = useNavigate()
    const { 
        NOMBRE_RECETA, 
        DETALLE_PEDIDO_PRODUCCION, 
        CATEGORIA_RECETA, 
        TIEMPO_PRODUC_RECETA,
        ID_RECETA_PRODUCCION,
    } = receta_produccion

    return (
        <tr className="">
             <td>
                {ID_RECETA_PRODUCCION}
            </td>
            <td>
                {NOMBRE_RECETA}
            </td>
            <td>
                {DETALLE_PEDIDO_PRODUCCION}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/gestorpasoreceta/${ID_RECETA_PRODUCCION}/pasos`)}
                        >Seleccionar
                </button>
                
                <Form 
                    method='POST'
                    action={`/receta/${ID_RECETA_PRODUCCION}/eliminar`}
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