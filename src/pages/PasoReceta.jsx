import { Link, useLoaderData } from "react-router-dom";
import { eliminarPasoReceta } from "../data/paso_receta";
import TipoListaProduc from "../components/PasoReceta";

export function loader() {
    const pasoReceta = obtenerPasosReceta(1)
    return pasoReceta
}

function PasoReceta() {

    const pasoreceta = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl">Pasos de la Receta</h1>
            <p>Administración de Pasos de la Receta</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {pasoreceta.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Nombre Paso</th>
                                <th className="p-2">Descripción</th>
                                <th className="p-2">Categoria</th>
                                <th className="p-2">Tiempo</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasoreceta.map( pasoreceta => (
                                    <PasoReceta 
                                        tipo_lista_produc={pasoreceta}
                                        key={pasoreceta.ID_PASO_RECETA}
                                    />
                                    ))}
                        </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe el pasos en la receta</p> )}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/gestortipolista'>CREAR</Link>
                </button>
            </div>
        </>
    )
}

export default PasoReceta