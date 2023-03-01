import {useEffect, useState} from "react"

const VerDetalleBalanceRegistro = ({balance}) => {

    
    
    return (
        <>
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

                    defaultValue={balance?.ACTIVOS}
                    name="activos"
                    
                    /// add
                />
            </div>
        </>
    )
}

export default VerDetalleBalanceRegistro
