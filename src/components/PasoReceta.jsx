import { Form, useNavigate, redirect} from "react-router-dom"
import { eliminarPasoReceta } from "../data/paso_receta"

export async function action({params}){
    await eliminarPasoReceta(params.pasorecetaId)
    
    return redirect('/gestorpasoreceta')
}

function PasoReceta({paso_receta}) {

    const navigate = useNavigate()
    const {
        ID_PASO_RECETA,
        ID_RECETA_PRODUCCION,
        NOMBRE_PASO_RECETA,
        DESCRIPCION_PASO_RECETA,
        CATEGORIA_PASO_RECETA,
        TIEMPO_PRODUC_RECETA,
    } = paso_receta

    return (
        <tr className="">
            <td>
                {NOMBRE_PASO_RECETA}
            </td>
            <td>
                {DESCRIPCION_PASO_RECETA}
            </td>
            <td>
                {CATEGORIA_PASO_RECETA}
            </td>
            <td>
                {TIEMPO_PRODUC_RECETA}
            </td>            
            <td className="p-4 flex justify-center gap-3">
                {/*<button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/tipolista/${ID_TIPO_LISTA_PRODUC}/actualizar`)}>Editar
                </button>*/}
                
                <Form 
                    method='DELETE'
                    action={`/pasoreceta/${ID_PASO_RECETA}/eliminar`}
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

export default PasoReceta