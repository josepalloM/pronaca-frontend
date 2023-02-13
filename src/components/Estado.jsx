export async function action({params}){
    await eliminarAsiento(params.asientoId)
    return redirect('/finanzas/estado')
}

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