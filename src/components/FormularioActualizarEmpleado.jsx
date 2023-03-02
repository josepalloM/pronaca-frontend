import {useEffect, useState} from "react"

const FormularioActualizarEmpleado = ({empleado, departamentos, cargos_empleado}) => {
    
    const [departamento, setDepartamento] = useState("")
    const [cargo, setCargo] = useState("")
    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="nombre_empleado"
                >Nombre:</label>
                <input 
                    id="nombre_empleado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del empleado"

                    defaultValue={empleado?.NOMBRE_EMPLEADO}
                    name="nombre_empleado"
                    
                    
                    /// add
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="apellido_empleado"
                >Apellido:</label>
                <input 
                    id="apellido_empleado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del empleado"

                    defaultValue={empleado?.APELLIDO_EMPLEADO}
                    name="apellido_empleado"
                    
                    /// add
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="cedula_empleado"
                >Cedula:</label>
                <input 
                    id="cedula_empleado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cedula del empleado"
                    name="cedula_empleado"
                    defaultValue={empleado?.CEDULA_EMPLEADO}
                    pattern="[0-9]{10}"
                    /// add
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="correo"
                >E-Mail:</label>
                <input 
                    id="correo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="E-mail del empleado"
                    name="correo"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$"
                    defaultValue={empleado?.CORREO} 
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="horas_laboradas"
                >Horas extras laboradas:</label>
                <input
                    id="horas_laboradas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Horas extras laboradas"
                    name="horas_laboradas"
                    /// add
                    pattern="[0-9.0-9]{0,6}"
                    defaultValue={empleado?.HORAS_LABORADAS}                   
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="sueldo_fijo"
                >Sueldo fijo:</label>
                <input
                    id="sueldo_fijo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Sueldo Fijo (Ejm: 550.00)"
                    name="sueldo_fijo"
                    pattern="[0-9.0-9]{0,6}"
                    defaultValue={empleado?.SUELDO_FIJO}  
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="sueldo_horas"
                >Sueldo por horas:</label>
                <input
                    id="sueldo_horas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Sueldo por Horas (Ejm: 3.0)"
                    name="sueldo_horas"
                    pattern="[0-9.0-9]{0,6}"
                    defaultValue={empleado?.SUELDO_HORAS}  
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="nombre_departamento"
                >Departamento:</label>
                <div className="">
                    {departamentos.length ?(
                    <select id="nombre_departamento" value={departamento} name="nombre_departamento" onChange={(event)=>setDepartamento(event.target.value)} className="form-control border-2 border-black">
                        <option >Selecciona un departamento</option>
                        {departamentos.map(departamento =>(
                            <option key={departamento.ID_DEPARTAMENTO} value={departamento.ID_DEPARTAMENTO}>{departamento.NOMBRE_DEPARTAMENTO}</option>
                        ))}
                    </select>
                    ):(<p> No existe DEPARTAMENTOS</p>)}
                </div>
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="descripcion_cargo"
                >Cargo:</label>
                <div className="">
                    {cargos_empleado.length ?(
                        <select id="descripcion_cargo" value={cargo} name="descripcion_cargo" onChange={(event)=>setCargo(event.target.value)} className="form-control border-2 border-black">
                            <option>Selecciona un cargo</option>
                            {cargos_empleado.filter(cargos=>cargos.ID_DEPARTAMENTO==departamento).map( cargo => (
                                <option key={cargo.ID_CARGO_EMPLEADO} value={cargo.DESCRIPCION_CARGO}>{cargo.DESCRIPCION_CARGO}</option>                         
                            ))}                        
                        </select>
                    ):(<p> No existe DEPARTAMENTOS</p>)}

                </div>
                
            </div>     
          
            
        </>
    )
}

export default FormularioActualizarEmpleado
