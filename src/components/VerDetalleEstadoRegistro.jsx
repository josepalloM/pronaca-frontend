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
            >Ingresos:</label>
            <input
                id="ingresos"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Ingresos"

                defaultValue={-estado?.ingresos}
                name="ingresos"


            />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Costos"
                >Costos:</label>
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
                >Gastos:</label>
                <input
                    id="gastos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Gastos"
                    name="gastos"
                    defaultValue={-estado?.gastos}
                    


                />
            </div>

            




        </>
    )
}

export default VerDetalleEstadoRegistro
