export async function action({params}){
    await eliminarAsiento(params.asientoId)
    return redirect('/finanzas/balance')
}

function Balance({ balance }) {
    const { ACTIVOS, PASIVOS, PATRIMONIO} = balance

    return (
        <tr>
            <td>
                {ACTIVOS}
            </td>
            <td>
                {PASIVOS}
            </td>
            <td>
                {PATRIMONIO}
            </td>
        </tr>
    )
}

export default Balance