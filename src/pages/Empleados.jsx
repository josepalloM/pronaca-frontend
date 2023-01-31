import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";
import {obtenerCargos} from "../data/cargo_empleado"
import {actualizarCostos} from "../data/cuentas.js";
import { actualizarAsientos } from "../data/asiento";

export async function loader() {
    const empleados = await obtenerEmpleados()
    const cargos_empleados = await obtenerCargos()
    await actualizarCostos()
    await actualizarAsientos()
    return {empleados,cargos_empleados}
}

function Empleados() {

    const {empleados, cargos_empleados} = useLoaderData()
    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-4xl">Empleados</h1>
            <p >Administración de empleados</p>
            
            <button
                type="button"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(`/empleados/iess`)}
            >Valor IESS</button> <br></br>

<button
                type="button"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(`/empleados/departamentos/nuevo`)}
            >Nuevo departamento</button><br></br>

<button
                type="button"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(`/empleados/cargos/nuevo`)}
            >Nuevo cargo</button><br></br>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {empleados.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Sueldo Neto</th>
                                <th className="p-2">Cargo</th>
                                <th className="p-2">Acciones</th>
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
                ): (<p className="text-center mt-10"> No existe empleados</p> )}

                <button  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/empleados/nuevo'>CREAR EMPLEADO</Link>
                </button>
            </div>

            

            

            
        
        </>
    )
}

export default Empleados