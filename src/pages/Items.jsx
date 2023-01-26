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
            <h1 className="font-black text-4xl text-blue-900">Item</h1>
            <p className="mt-3">Administración de Items</p>

            {items.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Id Cuenta</th>
                            <th>Tipo Item</th>
                            <th>Nombre Item</th>
                            <th>Fecha Fabricación</th>
                            <th>Fecha Caducidad 1</th>
                            <th>Fecha Caducidad 2</th>
                            <th>Lote Item</th>
                            <th>Cantidad Lote</th>
                            <th>Precio Item</th>
                            <th>Peso Item</th>
                            <th>Conservación Item</th>
                            <th>Detalle Item</th>
                            <th>Estado Item</th>
                            <th>Acciones</th>
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
            ): (<p> No existe Item</p> )}

            <button>
                <Link
                    to='/item/nuevo'>CREAR</Link>
            </button>
        
        </>
    )
}

export default Items