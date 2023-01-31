import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {obtenerAsientos} from "../data/asiento";

export async function loader() {
    const asientos = await obtenerAsientos()
    return asientos
}

function Asientos() {

    const asientos = useLoaderData()
    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-4xl">Catálogo de Cuentas</h1>
            <p >Administración de Cuentas</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {asientos.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Código</th>
                                <th className="p-2">Nombre</th>
                            </tr>
                        </thead>
                        
                    </table>
                ): (<p className="text-center mt-10"> No existe Asientos</p> )}

                <button  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/finanzas/asientos/nuevo'>CREAR ASIENTOS</Link>
                </button>
            </div>            
        
        </>
    )
}

export default Asientos