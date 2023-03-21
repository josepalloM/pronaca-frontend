import { obtenerEmpleado} from "../data/empleados.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import { obtenerCargo } from "../data/cargo_empleado";
import { currencyFormatter } from "../utils/formatters";

export async function loader({params}){
    const empleado =  await obtenerEmpleado(params.empleadoId)
    const cargo_empleado = await obtenerCargo(empleado?.ID_CARGO_EMPLEADO)
    
    if (Object.values(empleado).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El empleado no fue encontrado'
        })
    }
    return {empleado, cargo_empleado}
}

function RolDePago() {

    const navigate = useNavigate()
    const {empleado, cargo_empleado} = useLoaderData()
    const errores = useActionData()
    

    return (
        <>
            <h1 className="font-black text-4xl text-black">PRONACA</h1>
            <h1 className="font-black text-4xl text-black">ROL DE PAGOS INDIVIDUAL</h1>

            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                    
                    <p
                    className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                    >Empleado: {empleado?.NOMBRE_EMPLEADO}
                    </p>
                    <p
                    className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                    >Cargo: {cargo_empleado?.DESCRIPCION_CARGO}
                    </p>
                </div>
                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                    <div className="grid grid-cols-2 gap-10">
                        <p
                        className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                        >INGRESOS
                        </p>
                        <p
                        className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                        >DESCUENTOS
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="grid grid-cols-2 gap-10">
                            <p
                            className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >Sueldo básco
                            </p>
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >{currencyFormatter.format(empleado?.SUELDO_FIJO)}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >Aportes IESS
                            </p>
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >{currencyFormatter.format((empleado?.SUELDO-empleado?.SUELDO_NETO).toFixed(2))}
                            </p>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="grid grid-cols-2 gap-10">
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >Horas extras
                            </p>
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >{empleado?.HORAS_LABORADAS*empleado?.SUELDO_HORAS}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="grid grid-cols-2 gap-10">
                            <p
                            className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >TOTAL INGRESOS
                            </p>
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >{currencyFormatter.format(empleado?.SUELDO)}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <p
                            className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >TOTAL DESCUENTOS
                            </p>
                            <p
                            className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                            >{currencyFormatter.format(empleado?.HORAS_LABORADAS*empleado?.SUELDO_HORAS)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                    <div className="grid grid-cols-2 gap-10">
                        <p
                        className="flex justify-center mt-3 ml-5 rounded p-2 uppercase font-bold text-black text-sm"
                        >NETO A PAGAR
                        </p>
                        <p
                        className="flex justify-center mt-3 mr-5 rounded p-2 uppercase font-bold text-black text-sm"
                        >{currencyFormatter.format(empleado?.SUELDO_NETO)}
                        </p>
                    </div>
                </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                onClick={() => navigate(-1)}
                            >Volver</button>
                        </div>
                        
                </div>
            </div>
        </>
    );
}

export default RolDePago;