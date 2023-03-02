import {useEffect, useState} from "react"

const VerDetalleBalanceRegistro = ({balance}) => {

    
    return (
        <>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha"
                >Fecha de Informe:</label>
                <h1>{balance?.fecha}</h1>
                
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

                    defaultValue={balance?.activos}
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

                    defaultValue={balance?.pasivos}
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
                    defaultValue={balance?.patrimonio}
                    


                />
            </div>

            




        </>
    )
}

export default VerDetalleBalanceRegistro
