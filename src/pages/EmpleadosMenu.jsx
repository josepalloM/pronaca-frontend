import React from 'react'

import { Link} from "react-router-dom";

function EmpleadosMenu() {
  return (

      <>        
        <h1 className="font-black text-4xl text-black">Empleados</h1>
        <p className="mt-3">Selecciona las acciones a realizar con los empleados</p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Acciones Pedidos</div>
        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
            <div className="grid grid-cols-2 gap-10">
                <button
                    className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                <Link

                    to='/empleados'>Empleados</Link>
                </button>
                <button
                    className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                <Link

                    to='/empleados/iess'>Parámetros del IESS</Link>
                </button>
                <button
                className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                >
                <Link

                    to='/empleados/departamentos'>Departamentos</Link>
                </button>
                <button
                    className="flex justify-center mt-3 ml-5 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    >
                <Link

                    to='/empleados/cargos'>Cargos</Link>
                </button>
            </div>

        </div>

      </>
    
    
    
  )
}

export default EmpleadosMenu