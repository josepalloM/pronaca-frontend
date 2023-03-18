import { useState } from "react"
const FormularioTransporte = ({ transporte }) => {
    //console.log("Cliente en actualizar FORM", cliente)
    //console.log("Cliente ESTADO en actualizar FORM", cliente.cliente.ESTADO_CLIENTE)
    //console.log("Ubicaciones en actualizar FORM", ubicaciones)
    // const [ubicacion, setUbicacion] = useState("")
    return (

        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_transporte"
                >Nombre:</label>
                <input
                    id="nombre_transporte"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del transporte"
                    name="nombre_transporte"

                    defaultValue={transporte?.NOMBRE_TRANSPORTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc_transporte"
                >Nombre:</label>
                <input
                    id="ruc_transporte"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="RUC del transporte"
                    name="ruc_transporte"

                    defaultValue={transporte?.RUC_TRANSPORTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_transporte"
                >Teléfono:</label>
                <input
                    id="telefono_transporte"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_transporte"
                    defaultValue={transporte?.TELEFONO_TRANSPORTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="direccion_transporte"
                >Dirección:</label>
                <input
                    id="direccion_transporte"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del transporte"
                    name="direccion_transporte"

                    defaultValue={transporte?.DIRECCION_TRANSPORTE}
                />
            </div>
        </>
    )
}

export default FormularioTransporte