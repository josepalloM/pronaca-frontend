import { useNavigate, Link, useLoaderData } from "react-router-dom";
import { obtenerRecetasProduccion } from "../data/receta_produccion";
import Receta_Produccion from "../components/Receta";

export function loader() {
    const recetas_produccion = obtenerRecetasProduccion()
    //console.log(recetas_produccion)
    return recetas_produccion
}

function Recetas_Produccion() {

    const recetas_produccion = useLoaderData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl">Receta de Produccion</h1>
            <p>Administracion Receta de Producción</p>
            <button
                type="button"
                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(-1)}
            >Volver
            </button>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {recetas_produccion.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Codigo</th>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Detalle</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recetas_produccion.map(receta_produccion => (
                                <Receta_Produccion
                                    receta_produccion={receta_produccion}
                                    key={receta_produccion.ID_RECETA_PRODUCCION}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existe la receta</p>)}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/receta/nuevo'>CREAR</Link>
                </button>

            </div>
        </>
    )
}

export default Recetas_Produccion