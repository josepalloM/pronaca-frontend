function Item({ item}) {
    const { ID_ITEM, ID_CUENTA, TIPO_ITEM, NOMBRE_ITEM, FECHA_FABRI_ITEM, FECHA1_CADU_ITEM, FECHA2_CADU_ITEM,
        LOTE_ITEM, CANTIDAD_LOTE_ITEM, PRECIO_ITEM, PESO_ITEM, CONSERVACION_ITEM, DETALLE_ITEM, ESTADO_ITEM} = item

    return (
        <tr>
            <td>
                {ID_CUENTA}
            </td>
            <td>
                {TIPO_ITEM}
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
            <td>
                {ESTADO_ITEM}
            </td>
            <td>
                <button>Actualizar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    )
}

export default Item