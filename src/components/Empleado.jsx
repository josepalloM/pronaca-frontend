import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Empleado({ empleado, cargos}) {
    const {ID_EMPLEADO, NOMBRE_EMPLEADO, APELLIDO_EMPLEADO,ID_CARGO_EMPLEADO,CORREO,SUELDO_NETO} = empleado
    const [DESCRIPCION_CARGO,setCargo] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{    
        
        {cargos.filter(cargos_e => cargos_e.ID_CARGO_EMPLEADO===ID_CARGO_EMPLEADO).map(cargo =>(
            setCargo(cargo.DESCRIPCION_CARGO)
        ))}
    })
    return (
        <tr className="border-b">
            <td>
                {NOMBRE_EMPLEADO} {APELLIDO_EMPLEADO}
            </td>
            <td>
                {SUELDO_NETO}
            </td>
            <td>
                {DESCRIPCION_CARGO}
            </td>
            <td>
                {CORREO}
            </td>
            c
        </tr>
    )
}

export default Empleado