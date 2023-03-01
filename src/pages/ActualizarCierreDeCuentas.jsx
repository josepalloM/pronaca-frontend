import {redirect} from "react-router-dom";
import { cerrarCuentas } from "../data/detalle_asiento";

export async function loader({params}){
    await cerrarCuentas(params.asientoId)
    
    return redirect('/finanzas/asientos')
}

function ActualizarCierreDeCuentas() {

    return (
        <>
        </>
    );
}

export default ActualizarCierreDeCuentas;