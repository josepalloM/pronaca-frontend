import React from 'react'

import { Link, useLocation } from "react-router-dom"
function Finanzas() {

    const location = useLocation()

    return (

        <>
            <h1 className="font-black text-4xl text-black">Finanzas</h1>
            <p className="mt-3">Selecciona las acciones a realizar con las finanzas</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Acciones Pedidos</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="grid grid-cols-2 gap-10">
                    <button
                        className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                        <Link
                            state={location.state}
                            to='/finanzas/cuentas'>Cuentas</Link>
                    </button>
                    <button
                        className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                        <Link
                            state={location.state}
                            to='/finanzas/asientos'>Asientos</Link>
                    </button>
                    <button
                        className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                        <Link
                            state={location.state}
                            to='/finanzas/bancos'>Bancos</Link>
                    </button>
                    <button
                        className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                        <Link
                            state={location.state}
                            to='/finanzas/balance'>Balance General</Link>
                    </button>

                    <button
                    className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                <Link

                    to='/finanzas/estado'>Estado de Resultados</Link>
                </button>

                </div>

            </div>
        </>



    )
}

export default Finanzas