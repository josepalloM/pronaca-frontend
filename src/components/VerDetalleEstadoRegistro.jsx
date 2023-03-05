import {useEffect, useState} from "react"

const VerDetalleEstadoRegistro = ({estado}) => {

    
    return (
        <>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha"
                >Fecha de Informe:</label>
                <h1>{estado?.fecha}</h1>
                
            </div>

            <div className="mb-4">

            <label
                className="flex justify-start text-gray-800"
                htmlFor="Ingresos"
            >Ingresos de Ventas:</label>
            <input
                id="ingresos"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Ingresos"

                defaultValue={estado?.ingresos}
                name="ingresos"


            />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Costos"
                >Costos de Ventas:</label>
                <input
                    id="costos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Costos"

                    defaultValue={estado?.costos}
                    name="costos"

                /// add
                />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Gastos"
                >Gastos de Produccion:</label>
                <input
                    id="gastos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Gastos"
                    name="gastos"
                    defaultValue={estado?.gastos}
                    


                />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Utilidad sin Impuestos"
                >Utilidad</label>
                <input
                    id="utilidad_sin_impuestos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="utilidad sin impuestos"
                    name="gastos"
                    defaultValue={300}
                    


                />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800 font-bold"
                    htmlFor="Utilidad Neta"
                >Utilidad Neta:</label>
                <input
                    id="utilidad_neta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="utilidad neta"
                    name="utilidad_neta"
                    defaultValue={250}
                    


                />
            </div>

            




        </>
    )
}

export default VerDetalleEstadoRegistro
