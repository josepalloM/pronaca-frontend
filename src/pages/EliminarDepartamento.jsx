import { redirect } from "react-router-dom";
import { eliminarDepartamento } from "../data/departamentos.js"

export async function loader({params}){
    await eliminarDepartamento(params.departamentoId)
    
    return redirect('/empleados/departamentos')
}

function EliminarDepartamento() {

    return (
        <>
        </>
    );
}

export default EliminarDepartamento;