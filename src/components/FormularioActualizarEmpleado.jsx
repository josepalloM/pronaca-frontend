import { Link, useLoaderData } from "react-router-dom";
import {useState} from "react"

const FormularioActualizarEmpleado = ({empleado}) => {

    const [value, setValue] = useState("")
    const [valueC, setValueC] = useState("")

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
                    defaultValue={empleado?.APELLIDO_EMPLEADO}
                    
                    /// add
                />
            </div>
            
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="horas_laboradas"
                >Horas laboradas:</label>
                <input
                    id="horas_laboradas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Horas laboradas"
                    name="horas_laboradas"
                    /// add
                    defaultValue={empleado?.APELLIDO_EMPLEADO}
                    
                />
            </div>

          
            
        </>
    )
}

export default FormularioActualizarEmpleado
