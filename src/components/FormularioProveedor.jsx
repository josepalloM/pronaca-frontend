import {useState} from "react"
const FormularioProveedor = ({proveedor}) => {    
    //console.log("Cliente en actualizar FORM", cliente)
    //console.log("Cliente ESTADO en actualizar FORM", cliente.cliente.ESTADO_CLIENTE)
    //console.log("Ubicaciones en actualizar FORM", ubicaciones)
    // const [ubicacion, setUbicacion] = useState("")
    return (
       
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_proveedor"
                >Nombre:</label>
                <input 
                    id="nombre_proveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del proveedor"
                    name="nombre_proveedor"
                    
                    defaultValue={proveedor?.NOMBRE_PROVEEDOR}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="tipo_proveedor"
                >Tipo:</label>
                <select
                    id="tipo_proveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Tipo del proveedor"
                    name="tipo_proveedor"
                    // onChange={handleEstado}
                    defaultValue={proveedor?.TIPO_PROVEEDOR}
                >
                    <option>Seleccione un tipo</option>
                    <option value={"CARNICO"}>CARNICO</option>
                    <option value={"INSUMOS"}>INSUMOS</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc"
                >Ruc:</label>
                <input 
                    id="ruc"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Ruc del proveedor"
                    name="ruc"
                    defaultValue={proveedor?.RUC}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_proveedor"
                >Teléfono:</label>
                <input
                    id="telefono_proveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_proveedor"
                    defaultValue={proveedor?.TELEFONO_PROVEEDOR}
                />
            </div>
        </>
    )
}

export default FormularioProveedor