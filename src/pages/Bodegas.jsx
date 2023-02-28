import {obtenerBodegas} from "../data/bodegas.js";
import {Link, useLoaderData} from "react-router-dom";
import Pedido from "../components/Pedido.jsx";
import Pedidos from "./Pedidos.jsx";

export function loader() {
    const bodegas = obtenerBodegas()
    return bodegas
}

function Bodegas(){
    const bodegas = useLoaderData()

    return(
        <>
            <h1 className="font-black text-4xl ">Bodegas</h1>
            <p>Administración de bodegas</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {bodegas.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Sector Ubicación</th>
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
                        to='/opciones/pedido/nuevo'>CREAR Bodega</Link>
                </button>
            </div>
        </>
    )
}

export default Bodegas