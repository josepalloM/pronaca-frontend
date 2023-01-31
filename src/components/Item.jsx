import { Link, useNavigate } from "react-router-dom"

function Item({ item}) {

    const navigate = useNavigate()
    const { ID_ITEM, ID_LISTA_ITEMS, ID_ESTADO_PRODUCION, ID_TIPO_ITEM, CODIGO_ITEM, NOMBRE_ITEM, FECHA_FABRI_ITEM, FECHA1_CADU_ITEM, FECHA2_CADU_ITEM,
        LOTE_ITEM, CANTIDAD_LOTE_ITEM, PRECIO_ITEM, PESO_ITEM, CONSERVACION_ITEM, DETALLE_ITEM,} = item

    return (
        <tr className="">
            <td>
                {ID_LISTA_ITEMS}
            </td>
            <td>
                {ID_ESTADO_PRODUCION}
            </td>
            <td>
                {ID_TIPO_ITEM}
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
                {PRECIO_ITEM}
            </td>
            <td>
                {PESO_ITEM}
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
                <button type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Eliminar</button>
            </td>
        </tr>
    )
}

export default Item