import { Form, useNavigate, redirect } from "react-router-dom"
import { eliminarItem } from "../data/items"

export async function action({params}){
    await eliminarItem(params.itemId)
    
    return redirect('/produccion')
}

function Item({ item}) {

    const navigate = useNavigate()
    const { ID_ITEM, ID_LISTA_ITEMS, ID_ESTADO_PRODUCION,ESTADO_PRODUCCION, ID_TIPO_ITEM, TIPO_ITEM, CODIGO_ITEM, NOMBRE_ITEM, FECHA_FABRI_ITEM, FECHA1_CADU_ITEM, FECHA2_CADU_ITEM,
        LOTE_ITEM, UNIDAD_MEDIDA,CANTIDAD_LOTE_ITEM, PRECIO_ITEM, PESO_ITEM, CONSERVACION_ITEM, DETALLE_ITEM, ID_RECETAP} = item

    return (
        <tr className="">
            <td>
                {ID_LISTA_ITEMS}
            </td>
            <td>
                {ESTADO_PRODUCCION}
            </td>
            <td>
                {TIPO_ITEM}
            </td>
            <td>
                {CODIGO_ITEM}
            </td>
            <td>
                {NOMBRE_ITEM}
            </td>
            <td>
                {FECHA_FABRI_ITEM}
            </td>
            <td>
                {FECHA1_CADU_ITEM}
            </td>
            <td>
                {FECHA2_CADU_ITEM}
            </td>
            <td>
                {LOTE_ITEM}
            </td>
            <td>
                {CANTIDAD_LOTE_ITEM}
            </td>
            <td>
                {UNIDAD_MEDIDA}
            </td>
            <td>
                {PESO_ITEM}
            </td>
            <td>
                {PRECIO_ITEM}
            </td>
            
            <td>
                {CONSERVACION_ITEM}
            </td>
            <td>
                {DETALLE_ITEM}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/item/${ID_ITEM}/actualizar`)}>Editar</button>
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

export default Item