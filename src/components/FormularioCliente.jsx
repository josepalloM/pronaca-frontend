import {useState} from "react"
const FormularioCliente = ({cliente, ubicaciones}) => {    
    //console.log("Cliente en actualizar FORM", cliente)
    //console.log("Cliente ESTADO en actualizar FORM", cliente.cliente.ESTADO_CLIENTE)
    //console.log("Ubicaciones en actualizar FORM", ubicaciones)
    const [ubicacion, setUbicacion] = useState("")
    return (
       
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_cliente"
                >Nombre:</label>
                <input 
                    id="nombre_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del cliente"
                    name="nombre_cliente"
                    
                    defaultValue={cliente?.NOMBRE_CLIENTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="apellido_cliente"
                >Apellido:</label>
                <input 
                    id="apellido_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del cliente"
                    name="apellido_cliente"
                    defaultValue={cliente?.APELLIDO_CLIENTE}
                />
            </div>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="ruc_cedula"
                >Cedula/Ruc:</label>
                <input 
                    id="ruc_cedula"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="ruc_cedula"
                    defaultValue={cliente?.RUC_CEDULA}
                />
            </div>
            <div className="mb-4">
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
                <input 
                    id="estado_cliente"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula/Ruc del cliente"
                    name="estado_cliente"
                    defaultValue={cliente?.ESTADO_CLIENTE}
                />
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
                />
            </div>
        </>
    )
}

export default FormularioCliente
