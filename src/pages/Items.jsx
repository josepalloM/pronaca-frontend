import { Link, useLoaderData } from "react-router-dom";
import { obtenerItems } from "../data/items";
import Item from "../components/Item";

export function loader() {
    const items = obtenerItems()
    return items
}

function Items() {

    const items = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl">Item</h1>
            <p>Administración de Items</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {items.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Id Lista Item</th>
                                <th className="p-2">Estado Produccion</th>
                                <th className="p-2">Id Tipo Item</th>
                                <th className="p-2">Codigo Item</th>
                                <th className="p-2">Nombre Item</th>
                                <th className="p-2">Fecha Fabricación</th>
                                <th className="p-2">Fecha Caducidad 1</th>
                                <th className="p-2">Fecha Caducidad 2</th>
                                <th className="p-2">Lote Item</th>
                                <th className="p-2">Cantidad Lote</th>
                                <th className="p-2">Precio Item</th>
                                <th className="p-2">Peso Item</th>
                                <th className="p-2">Conservación Item</th>
                                <th className="p-2">Detalle Item</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map( item => (
                                    <Item 
                                        item={item}
                                        key={item.ID_ITEM}
                                    />
                                    ))}
                        </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe Item</p> )}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/item/nuevo'>CREAR</Link>
                </button>
            </div>
        </>
    )
}

export default Items