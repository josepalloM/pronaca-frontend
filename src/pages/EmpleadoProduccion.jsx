import { Link, useLoaderData, useLocation } from "react-router-dom";


function EmpleadoProduccion() {

    const empleadosProduccion = useLoaderData()
    const location = useLocation()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Empleados Producción</h1>
            <p className="mt-3">Selecciona las acciones a realizar en produccion</p>
            <div className="flex justify-start bg-black text-white rounded md:w-3/4 mx-auto px-5 py-2 mt-6">Acciones Produccion</div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col items-center">
                        <button className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/gestorlista'>Gestor de Pedidos</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                            <Link state={location.state} to='/produccion'>Operario</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EmpleadoProduccion