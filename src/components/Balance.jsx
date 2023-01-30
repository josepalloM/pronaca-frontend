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