import { Link, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { obtenerDepartamentos } from "../data/departamentos";
import Departamento from "../components/Departamento";

export async function loader() {
    const departamentos = await obtenerDepartamentos()
    return { departamentos }
}

function Departamentos() {

    const { departamentos } = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <h1 className="font-black text-4xl">Departamentos</h1>
            <p >Administración de departamentos</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {departamentos.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="w-full bg-white shadow mt-5 table-auto">
                            <tr>
                                <th className="p-2">Nro. Departamento</th>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {departamentos.map(departamento => (
                                <Departamento
                                    departamento={departamento}
                                    key={departamento.ID_DEPARTAMENTO}
                                />

                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existen departamentos</p>)}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to='/empleados/departamentos/nuevo'>CREAR DEPARTAMENTO</Link>
                </button>
            </div>







        </>
    )
}

export default Departamentos