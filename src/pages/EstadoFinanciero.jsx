import { useLoaderData } from "react-router-dom";
import { obtenerEstado } from "../data/estado";
import Estado from "../components/Estado";

export async function loader() {
    const estado = await obtenerEstado()

    return { estado }
}

function EstadoFinanciero() {

    const { estado } = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl ">Estado Financiero</h1>
            <p>Vista del Estado Financiero</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {estado.length ? (
                    <table>
                        <thead>
                            <tr className="border-b">
                                <th>Ingresos</th>
                                <th>Costos</th>
                                <th>Gastos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estado.map(estado => (
                                <Estado
                                estado={estado}
                                />

                            ))}
                        </tbody>
                    </table>
                ) : (<p> No existe estado financiero</p>)}

            </div>







        </>
    )
}

export default EstadoFinanciero