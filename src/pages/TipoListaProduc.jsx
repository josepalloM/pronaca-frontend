import { Link, useLoaderData } from "react-router-dom";
import { obtenerTipoListaProducs } from "../data/tipo_lista_produc";
import TipoListaProduc from "../components/Tipo_Lista_Produc";

export function loader() {
    const tipo_lista_producs = obtenerTipoListaProducs()
    return tipo_lista_producs
}

function Tipo_Lista_Producs() {

    const tipo_lista_producs = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl">Tipo Lista de Producción</h1>
            <p>Administración de Tipo de Lista de Productos</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {tipo_lista_producs.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Id Tipo Lista</th>
                                <th className="p-2">Tipo Lista</th>
                                <th className="p-2">Detalle</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tipo_lista_producs.map( tipo_lista_produc => (
                                    <TipoListaProduc 
                                        tipo_lista_produc={tipo_lista_produc}
                                        key={tipo_lista_produc.ID_TIPO_LISTA_PRODUC}
                                    />
                                    ))}
                        </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe el tipo de lista</p> )}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/gestortipolista'>CREAR</Link>
                </button>
            </div>
        </>
    )
}

export default Tipo_Lista_Producs