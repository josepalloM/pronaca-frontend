import { obtenerBodegas } from "../data/bodegas.js";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Bodega from "../components/Bodega";
import { obtenerCuentasInventario } from "../data/cuentas.js"
import TablaInventarios from "../components/TablaInventarios";


export async function loader() {
    const inventarios = await obtenerCuentasInventario(0)

    const bodegas = await obtenerBodegas()
    return { bodegas, inventarios }
}

function Bodegas() {
    const { bodegas, inventarios } = useLoaderData()
    const location = useLocation()
    return (
        <>
            <h1 className="font-black text-4xl ">Bodegas</h1>
            <p>Administración de bodegas</p>


            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                <div className="flex flex-col items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3269/3269762.png" alt="Imagen 2" className="w-20 h-20 object-contain" />
                </div>
                {bodegas.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">ID</th>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Sector</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bodegas.map(bodega => (
                                <Bodega
                                    bodega={bodega}
                                    key={bodega.ID_BODEGA}
                                />

                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existe bodegas</p>)}

                <button
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                >
                    <Link
                        state={location.state}
                        to='/opciones/bodega/nuevo'>CREAR Bodega</Link>
                </button>
            </div>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {inventarios.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Código</th>
                                <th className="p-2">Descripción</th>
                                <th className="p-2">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventarios.map(cuenta => (
                                <TablaInventarios
                                    cuenta={cuenta}
                                    key={cuenta.ID_CUENTA}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existen cuentas de inventario</p>)}
            </div>
        </>
    )
}

export default Bodegas