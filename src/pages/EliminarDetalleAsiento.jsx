import {redirect} from "react-router-dom";
import { eliminarDetalleAsiento } from "../data/detalle_asiento.js";

export async function loader({params}){
    await eliminarDetalleAsiento(params.detalleAsientoId)
    
    return redirect('/finanzas/asientos/nuevo/nuevaCuentaAsiento')
}

function EliminarDetalleAsiento() {

    return (
        <>
        </>
    );
}

export default EliminarDetalleAsiento;