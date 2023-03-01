import { Link, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { obtenerCargos } from "../data/cargo_empleado";
import Cargo from "../components/Cargo_empleado";

export async function loader() {
    const cargos = await obtenerCargos()
    return { cargos }
}

function Cargos() {

    const { cargos } = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    
    return (
        <>
            <h1 className="font-black text-4xl">Cargos</h1>
            <p >Administración de cargos</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {cargos.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="w-full bg-white shadow mt-5 table-auto">
                            <tr>
                                <th className="p-2">Nro. Departamento</th>
                                <th className="p-2">Descripción del cargo</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cargos.map(cargo => (
                                <Cargo
                                    cargo={cargo}
                                    key={cargo.ID_CARGO_EMPLEADO}
                                />

                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existen cargos</p>)}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to='/empleados/cargos/nuevo'>CREAR CARGO</Link>
                </button>
            </div>







        </>
    )
}

export default Cargos