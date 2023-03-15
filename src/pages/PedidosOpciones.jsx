import { Link, useLocation } from "react-router-dom"

function PedidosOpciones() {

    const location = useLocation()


    return (
        <>
            <h1 className="font-black text-4xl text-black">Pedidos</h1>
            <p className="mt-3">Selecciona las acciones a realizar con los pedidos</p>

            <div className="flex justify-start bg-black text-white rounded md:w-3/4 mx-auto px-5 py-2 mt-6">Acciones Pedidos</div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3624/3624080.png" alt="Imagen 1" className="w-20 h-20 object-contain" />
                        <button className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/opciones/pedidos'>Pedidos</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/9813/9813840.png" alt="Imagen 2" className="w-20 h-20 object-contain" />
                        <button className="flex justify-center mt-3 mr-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/opciones/preventa'>Preventa</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );


}

export default PedidosOpciones