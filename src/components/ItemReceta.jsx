import { Form, useNavigate, redirect } from "react-router-dom"
import { eliminarItem } from "../data/items"

export async function action({params}){
    await eliminarItem(params.itemId)
    
    return redirect('/produccion')
}

function ItemReceta({ item}) {

    const navigate = useNavigate()
    const { ID_ITEM, ID_LISTA_ITEMS, ID_ESTADO_PRODUCION,ESTADO_PRODUCCION, ID_TIPO_ITEM, TIPO_ITEM, CODIGO_ITEM, NOMBRE_ITEM, FECHA_FABRI_ITEM, FECHA1_CADU_ITEM, FECHA2_CADU_ITEM,
        LOTE_ITEM, UNIDAD_MEDIDA,CANTIDAD_LOTE_ITEM, PRECIO_ITEM, PESO_ITEM, CONSERVACION_ITEM, NOMBRE_PASO_RECETA, NOMBRE} = item

    return (
        <tr className="">
            <td align="center">
                {CODIGO_ITEM}
            </td>
            <td>
                {TIPO_ITEM}
            </td>
            <td>
                {NOMBRE_ITEM}
            </td>
            <td>
                {NOMBRE}
            </td>
            <td>
                {NOMBRE_PASO_RECETA}
            </td>
            <td className="p-4 flex justify-center gap-3">
                {/*<button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/item/${ID_ITEM}/actualizar`)}>Editar</button>*/}
                <Form
                    method='POST'
                    action={`/item/${ID_ITEM}/eliminar`}
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

export default ItemReceta