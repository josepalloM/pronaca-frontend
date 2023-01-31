import { Link, useLoaderData } from "react-router-dom";


function EmpleadoProduccion() {

    const empleadosProduccion = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Empleados Produccion</h1>
            <div className="ml-40 mt-5">
                <div >
                <img width={150} className="bg-orangebg" src="https://cdn-icons-png.flaticon.com/512/1226/1226430.png"/>
                    <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                        <Link
                            to='/gestorlista'>Gestor de Pedidos</Link>
                    </button>
                </div>
                <div className="mt-6">
                    <img width={150} className="bg-orangebg" src="https://us.123rf.com/450wm/iconisa/iconisa1710/iconisa171001425/87222079-ingeniero-icono-de-l%C3%ADnea-de-vector-de-industria-signo-ilustraci%C3%B3n-sobre-fondo-blanco-trazos-editable.jpgZ"/>
                    <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                        <Link
                            to='/produccion'>Operario</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default EmpleadoProduccion