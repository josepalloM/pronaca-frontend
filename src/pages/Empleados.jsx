import { Link, useLoaderData, Form , redirect, useLocation} from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";
import {obtenerCargos} from "../data/cargo_empleado"
import { actualizarMovimiento, obtenerMovimientos} from "../data/movimiento_empleado";
import { actualizarCostosGastos } from "../data/cuentas.js";

export async function loader() {
    const empleados = await obtenerEmpleados()
    const cargos_empleados = await obtenerCargos()
    const movimiento_empleado = await obtenerMovimientos()
    actualizarMovimiento(0)
    
    return {empleados,cargos_empleados, movimiento_empleado}
}
export async function action({params}){
    await actualizarCostosGastos(params.empleadoId) 
    return redirect('/empleados')
}
function Empleados() {
    
    const {empleados, cargos_empleados, movimiento_empleado} = useLoaderData()
    console.log(movimiento_empleado)
    const location = useLocation()

    return (
        <>
            <h1 className="font-black text-4xl">Empleados</h1>
            <p >Administración de empleados</p>

            
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {empleados.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Cédula</th>
                                <th className="p-2">Horas extras</th>
                                <th className="p-2">Sueldo Neto</th>
                                <th className="p-2">Cargo</th>
                                <th className="p-2">E-mail</th>
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
                        state={location.state}
                        to='/empleados/nuevo'>CREAR EMPLEADO</Link>
                </button>
            </div>
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">Cuenta</th>
                            <th className="p-2">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimiento_empleado.map( mov_empleado => (
                            <tr className="border-b">
                                <td>
                                    {mov_empleado.DESCRIPCION_CUENTA}
                                </td>
                                <td>
                                    {-mov_empleado.VALOR_CUENTA}
                                </td>                    
                            </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
        
        </>
    )
}

export default Empleados