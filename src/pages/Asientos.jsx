import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {obtenerAsientos} from '../data/asiento'
import {obtenerCuentas} from '../data/cuentas'
import Asiento from '../components/Asiento'

export async function loader() {
    const asientos = await obtenerAsientos()
    const cuentas = await obtenerCuentas()
    return {asientos, cuentas}
}

function Asientos() {

    const {asientos, cuentas} = useLoaderData()
    return (
        <>
            <h1 className="font-black text-4xl">Asientos</h1>
            <p >Administración de asientos</p>
        
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {asientos.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Nro.</th>
                                <th className="p-2">Fecha</th>
                                <th className="p-2">Cuenta</th>
                                <th className="p-2">Código</th>
                                <th className="p-2">Debe</th>
                                <th className="p-2">Haber</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asientos.map( asiento => (
                                    <Asiento 
                                        asiento={asiento}
                                        cuentas={cuentas}
                                        key={asiento.ID_ASIENTO}
                                    />

                                ))}
                            </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe asientos</p> )}

                <button  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/finanzas/asientos/nuevo'>CREAR ASIENTOS</Link>
                </button>
            </div>

            

            

            
        
        </>
    )
}

export default Asientos