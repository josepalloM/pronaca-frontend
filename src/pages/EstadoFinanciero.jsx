import { useLoaderData, Link,useLocation } from "react-router-dom";
import { obtenerEstado } from "../data/estado";
import Estado from "../components/Estado";

export async function loader() {
const estado = await obtenerEstado();
return { estado };
}

function EstadoFinanciero() {
const { estado } = useLoaderData();
const location = useLocation()

return (
    <>
        <h1 className="font-black text-4xl ">Estado financiero</h1>
        <p>Vista del Estado financiero</p>

        <div className="rounded-md md:w-11/12 mx-auto px-5 py-10 mt-5">
            {estado.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">id</th>
                            <th className="p-2">fecha</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estado.map(estado => (
                            <Estado
                                estado={estado}
                                key={estado.id_estado}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10"> No existe estados financieros</p>
            )}
        </div>
        <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
            <Link to="#">CREAR ESTADO FINANCIERO</Link>
        </button>
    </>
);

}

export default EstadoFinanciero;
