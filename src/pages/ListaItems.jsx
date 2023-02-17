import { Link, useLoaderData } from "react-router-dom";
import { obtenerListaItems } from "../data/items";
import ListaItem from "../components/ListaItem";

export function loader() {
    const listaItems = obtenerListaItems()
    console.log(listaItems)
    return listaItems
}

function ListaItems() {

    const listaItems = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl">Lista Item</h1>
            <p>Administración de la Lista de Items</p>

            <div className="rounded-md md:w-11/12 mx-auto px-5 py-10 mt-5">
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2 w-16">Id Empleado</th>
                            <th className="p-2 w-24">Cuenta</th>
                            <th className="p-2 w-24">Id Tipo Lista Producto</th>
                            <th className="p-2 w-32">Detalle Lista</th>
                            <th className="p-2 w-16">Fecha Lista</th>
                            <th className="p-2 w-16">Estado Lista</th>
                            <th className="p-2 w-24">Detalle Estado Lista</th>
                            <th className="p-2 w-16">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaItems.map(listaItem => (
                            <ListaItem
                                listaItem={listaItem}
                                key={listaItem.ID_LISTA_ITEMS}
                            />
                        ))}
                    </tbody>
                </table>
                {!listaItems.length && (
                    <p className="text-center mt-10">No existe la Lista de Item</p>
                )}
            </div>
            <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                <Link to="/listaitem/nuevo">CREAR</Link>
            </button>
        </>

    )
}

export default ListaItems