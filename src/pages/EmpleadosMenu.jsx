import React from 'react'

import { Link, useLocation } from "react-router-dom"

function EmpleadosMenu() {

    const location = useLocation()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Empleados</h1>
            <p className="mt-3">Selecciona las acciones a realizar con los empleados</p>

            <div className="flex justify-start bg-black text-white rounded w-3/4 mx-auto px-5 py-2 mt-6">Acciones Empleados</div>
            <div className="bg-white shadow rounded-md w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/554/554744.png" alt="Icono de empleados" className="h-16 w-16 object-contain mb-2" />
                        <button
                            className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        >
                            <Link
                                state={location.state}
                                to='/empleados'>Empleados</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/8382/8382909.png" alt="Icono de parámetros del IESS" className="h-16 w-16 object-contain mb-2" />
                        <button
                            className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        >
                            <Link
                                state={location.state}
                                to='/empleados/iess'>Parámetros del IESS y SRI</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/4343/4343053.png" alt="Icono de departamentos" className="h-16 w-16 object-contain mb-2" />
                        <button
                            className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        >
                            <Link
                                state={location.state}
                                to='/empleados/departamentos'>Departamentos</Link>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/6713/6713388.png" alt="Icono de cargos" className="h-16 w-16 object-contain mb-2" />
                        <button
                            className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        >
                            <Link
                                state={location.state}
                                to='/empleados/cargos'>Cargos</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EmpleadosMenu