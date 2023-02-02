function Estado({ estado }) {
    const { INGRESOS, COSTOS, GASTOS} = estado

    return (
        <tr>
            <td>
                {INGRESOS}
            </td>
            <td>
                {COSTOS}
            </td>
            <td>
                {GASTOS}
            </td>
        </tr>
    )
}

export default Estado