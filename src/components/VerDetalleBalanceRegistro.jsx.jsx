import {useEffect, useState} from "react"

const VerDetalleBalanceRegistro = ({balance}) => {
    const {fecha,activos,pasivos, patrimonio,ID_informe_financiero} = balance

    
    
    return (
        <>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha"
                >Fecha de Informe:</label>
                <input
                    id="fecha"
                    type="date"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="fecha"

                    defaultValue={fecha}
                    name="fecha"

                /// add
                />
            </div>



            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Activos"
                >Activos:</label>
                <input
                    id="activos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Activos"

                    defaultValue={activos}
                    name="activos"

                /// add
                />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Pasivos"
                >Pasivos:</label>
                <input
                    id="pasivos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Pasivos"

                    defaultValue={pasivos}
                    name="pasivos"


                />
            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Patrimonio"
                >Pasivos:</label>
                <input
                    id="patrimonio"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Patrimonio"
                    name="pasivos"
                    defaultValue={patrimonio}
                    


                />
            </div>

            




        </>
    )
}

export default VerDetalleBalanceRegistro
