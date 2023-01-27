
function Empleado({ empleado}) {
    const { NOMBRE_EMPLEADO, SUELDO_NETO, ID_EMPLEADO} = empleado

    return (
        <tr>
            <td>
                {NOMBRE_EMPLEADO}
            </td>
            <td>
                {SUELDO_NETO}
            </td>
            <td>
                <button>Editar</button>&emsp;
                <button>Eliminar</button>&emsp;
                <button>Pagar</button>
                
            </td>
        </tr>
    )
}

export default Empleado