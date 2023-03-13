import { useNavigate,Link, useLoaderData } from "react-router-dom";
import { obtenerItems } from "../data/items";
import ItemReceta from "../components/ItemReceta";

let idList = 1;

export async function loader({ params }) {

    const idLista = params.idlista;
    idList = idLista;
    const items = obtenerItems()
    return items

}

function ItemsReceta() {

    const items = useLoaderData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl">Producto</h1>
            <p>Estacion de creacion de producctos</p>
            <div>
                <button className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    onClick={() => navigate('/gestorlista')}
                >Volver</button>
            </div>
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {items.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Codigo Item</th>
                                <th className="p-2">Tipo Item</th>
                                <th className="p-2">Nombre Item</th>
                                <th className="p-2">Bodega</th>
                                <th className="p-2">Lote</th>
                                <th className="p-2">Medidad</th>
                                <th className="p-2">Peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.filter(items => items.ID_TIPO_ITEM == 1).map(item => (
                                <ItemReceta
                                    item={item}
                                    key={item.ID_ITEM}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (<p className="text-center mt-10"> No existe Item</p>)}

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/item/nuevo'>CREAR</Link>
                </button>
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">Codigo Item</th>
                            <th className="p-2">Tipo Item</th>
                            <th className="p-2">Nombre Item</th>
                            <th className="p-2">Bodega</th>
                            <th className="p-2">Lote</th>
                            <th className="p-2">Medidad</th>
                            <th className="p-2">Peso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.filter(items => items.ID_LISTA_ITEMS == idList).map(item => (
                            <ItemReceta
                                item={item}
                                key={item.ID_ITEM}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ItemsReceta