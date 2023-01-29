import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import {eliminarEmpleado} from "../data/empleados.js"

export async function loader({params}){
    await eliminarEmpleado(params.empleadoId)
    
    return redirect('/empleados')
}

function EliminarEmpleado() {

    return (
        <>
        </>
    );
}

export default EliminarEmpleado;