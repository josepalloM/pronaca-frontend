import { useNavigate,Link, useLoaderData } from "react-router-dom";
import { obtenerRecetaProduccion } from "../data/receta_produccion";
import PasoReceta from "../components/PasoReceta";

export async function loader({params}) {
    const pasosreceta = await obtenerRecetaProduccion(params.pasorecetaId)
    
    return pasosreceta
}

function PasosReceta() {

    const pasosreceta = useLoaderData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl">Pasos de la Receta</h1>
            <p>Administración de Pasos de la Receta</p>
            <button
                type="button"
                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(-1)}
            >Volver
            </button>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {pasosreceta.length ? (
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
                            {pasosreceta.map(pasoreceta => (
                                <PasoReceta
                                    paso_receta={pasoreceta}
                                    key={pasoreceta.ID_PASO_RECETA}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existe el pasos en la receta</p>)}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/pasosreceta/nuevo/'>CREAR</Link>
                </button>
            </div>
        </>
    )
}

export default PasosReceta