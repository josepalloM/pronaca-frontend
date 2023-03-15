import { Link, useLocation } from "react-router-dom"

function ProveedoresOpciones() {

    const location = useLocation()


    return (
        <>
            <h1 className="font-black text-4xl text-black">Proveedores</h1>
            <p className="mt-3">Selecciona las acciones a realizar con los proveedores</p>

            <div className="flex justify-start bg-black text-white rounded md:w-3/4 mx-auto px-5 py-2 mt-6">Acciones proveedores</div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col items-center">
                        <button className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/proveedoresOpciones/proveedores'>Proveedores</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="flex justify-center mt-3 mr-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/proveedoresOpciones/pedidosProveedor'>Pedidos proveedores</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );


}

export default ProveedoresOpciones