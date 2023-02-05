import { Link, useLoaderData, useNavigate, Form , redirect} from "react-router-dom";
import { obtenerEmpleados } from "../data/empleados";
import Empleado from "../components/Empleado";
import {obtenerCargos} from "../data/cargo_empleado"
import { actualizarMovimiento } from "../data/movimiento_empleado";
import { useState } from "react";
import { actualizarCostosGastos } from "../data/cuentas.js";

export async function loader() {
    const empleados = await obtenerEmpleados()
    const cargos_empleados = await obtenerCargos()
    
    {empleados.map( empleado => {
        actualizarMovimiento(empleado.ID_EMPLEADO)
    })}
    return {empleados,cargos_empleados}
}
export async function action({params}){
    await actualizarCostosGastos(params.empleadoId) 
    return redirect('/empleados')
}
function Empleados() {
    const [idBanco,setIdBanco] = useState("")
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
            >IESS</button> <br></br>
            <Form
                method='post'
                action={`/empleados/${idBanco}/pagar`}
                onSubmit={ (e) => {
                    if (!confirm('¿Deseas Pagar el sueldo?')){
                        e.preventDefault()
                    }
                }}
            >   
                <button
                    type="submit"
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    onClick={(event)=>setIdBanco(empleados[0]?.ID_BANCO)}
                >Pagar</button>
            </Form>
            <button
                type="button"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(`/empleados/departamentos`)}
            >Departamentos</button><br></br>

<button
                type="button"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(`/empleados/cargos`)}
            >Cargos</button><br></br>

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