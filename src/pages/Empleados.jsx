import { Link, useLoaderData } from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";
import {obtenerCargos} from "../data/cargo_empleado"

export async function loader() {
    const empleados = await obtenerEmpleados()
    const cargos_empleados = await obtenerCargos()
    return {empleados,cargos_empleados}
}

function Empleados() {

    const {empleados, cargos_empleados} = useLoaderData()
    return (
        <>
            <h1 className="font-black text-4xl ">Empleados</h1>
            <p>Administración de empleados</p>
            <Link 
                
                    to='/iess'>IESS</Link>
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {empleados.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Sueldo Neto</th>
                                <th>Cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map( empleado => (
                                    <Empleado 
                                        empleado={empleado}
                                        cargos={cargos_empleados}
                                        key={empleado.ID_EMPLEADO}
                                    />

                                ))}
                            </tbody>
                    </table>
                ): (<p> No existe empleados</p> )}

                <button  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/empleados/nuevo'>CREAR EMPLEADO</Link>
                </button>
            </div>

            

            

            
        
        </>
    )
}

export default Empleados