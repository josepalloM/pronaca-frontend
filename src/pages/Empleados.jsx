import { Link, useLoaderData } from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";


export function loader() {
    const empleados = obtenerEmpleados()
    return empleados
}

function Empleados() {

    const empleados = useLoaderData()
    console.log("mi emp"+empleados)
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Empleados</h1>
            <p className="mt-3">Administración de empleados</p>

            <Link 
                
                    to='/iess'>IESS</Link>

            {empleados.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Sueldo Neto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map( empleado => (
                                <Empleado 
                                    empleado={empleado}
                                    key={empleado.ID_EMPLEADO}
                                />

                            ))}
                        </tbody>
                </table>
            ): (<p> No existe empleados</p> )}

            <button>
                <Link
                    to='/empleados/nuevo'>CREAR EMPLEADO</Link>
            </button>
        
        </>
    )
}

export default Empleados