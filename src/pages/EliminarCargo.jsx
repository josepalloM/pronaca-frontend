import { redirect } from "react-router-dom";
import { eliminarCargo } from "../data/cargos_empleado.js"

export async function loader({params}){
    await eliminarCargo(params.cargoId)
    
    return redirect('/empleados/cargos')
}

function EliminarCargo() {

    return (
        <>
        </>
    );
}

export default EliminarCargo;