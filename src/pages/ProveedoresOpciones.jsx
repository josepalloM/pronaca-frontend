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
                        <img src="https://cdn-icons-png.flaticon.com/512/2801/2801655.png" alt="Imagen 2" className="w-20 h-20 object-contain" />
                        <Link state={location.state} to='/proveedoresOpciones/proveedores'>
                            <button className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                    Proveedores
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3620/3620688.png" alt="Imagen 2" className="w-20 h-20 object-contain" />
                        <Link state={location.state} to='/proveedoresOpciones/pedidosProveedor'>
                            <button className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                    Pedidos proveedores
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );


}

export default ProveedoresOpciones