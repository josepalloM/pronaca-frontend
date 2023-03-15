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
                <input 
                    id="tipo_proveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Tipo del proveedor"
                    name="tipo_proveedor"
                    defaultValue={proveedor?.TIPO_PROVEEDOR}
                />
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
            {/* <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="email_cliente"
                >Email:</label>
                <input 
                    id="email_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="email_cliente"
                    defaultValue={cliente?.EMAIL_CLIENTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="estado_cliente"
                >Estado Cliente:</label>
                <select 
                    id="estado_cliente"
                    className="form-control border-2 border-black"
                    name="estado_cliente"
                    defaultValue={cliente?.ESTADO_CLIENTE}
                >
                    <option>Seleccione una opción</option>
                    <option value={"Potencial"}>Potencial</option>
                    <option value={"Activo"}>Activo</option>
                    <option value={"Inactivo"}>Inactivo</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="id_ubicacion"
                >Sector-Ubicacion:</label>
                <div className="">
                    {ubicaciones.length ?(
                    <select 
                        id="id_ubicacion" 
                        value={ubicacion} 
                        name="id_ubicacion" 
                        onChange={(event)=>setUbicacion(event.target.value)} 
                        className="form-control border-2 border-black"
                        >
                        <option >Selecciona una zona</option>
                        {ubicaciones.map((ubicacion)=>{
                            if(cliente?.ID_UBICACION === ubicacion.ID_UBICACION){
                                
                                return(<option 
                                key={ubicacion.ID_UBICACION} 
                                value={ubicacion.ID_UBICACION}
                                
                                >{ubicacion.ZONA_UBICACION}-{ubicacion.SECTOR_UBICACION}</option>)
                            }else{
                                return(<option 
                                key={ubicacion.ID_UBICACION} 
                                value={ubicacion.ID_UBICACION}
                                >{ubicacion.ZONA_UBICACION}-{ubicacion.SECTOR_UBICACION}</option>)
                            }
                            
                        })}
                    </select>
                    ):(<p> No existen Ubicaciones</p>)}
                </div>
            </div> 
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="numero_ubicacion"
                >Dirección:</label>
                <input 
                    id="numero_ubicacion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Dirección del cliente"
                    name="numero_ubicacion"
                    defaultValue={cliente?.NUMERO_UBICACION}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="telefono_cliente"
                >Teléfono:</label>
                <input
                    id="telefono_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono"
                    name="telefono_cliente"
                    defaultValue={cliente?.TELEFONO_CLIENTE}
                /> */}
            {/* </div> */}
        </>
    )
}

export default FormularioProveedor