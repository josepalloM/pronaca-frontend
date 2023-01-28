import { Link, useLoaderData } from "react-router-dom";
import {useState} from "react"

const Formulario = ({empleado,departamentos, cargos_empleado}) => {

    const [value, setValue] = useState("")
    const [valueC, setValueC] = useState("")

    console.log(value+"jjj"+valueC)
    return (
        <>
            <div className="">
                <label
                    className=""
                    htmlFor="nombre_empleado"
                >Nombre:</label>
                <input 
                    id="nombre_empleado"
                    type="text"
                    className=""
                    placeholder="Nombre del empleado"
                    name="nombre_empleado"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="apellido_empleado"
                >Apellido:</label>
                <input 
                    id="apellido_empleado"
                    type="text"
                    className=""
                    placeholder="Apellido del empleado"
                    name="apellido_empleado"
                />
            </div>
            <div className="">
                <label
                    className=""
                    htmlFor="cedula_empleado"
                >Cedula:</label>
                <input 
                    id="cedula_empleado"
                    type="text"
                    className=""
                    placeholder="Cedula del empleado"
                    name="cedula_empleado"
                />
            </div>
            
            <div className="">
                <label
                    className=""
                    htmlFor="horas_laboradas"
                >Horas laboradas:</label>
                <input
                    id="horas_laboradas"
                    type="text"
                    className=""
                    placeholder="Horas laboradas"
                    name="horas_laboradas"
                />
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="nombre_departamento"
                >Departamento:</label>
                <div className="">
                    {departamentos.length ?(
                    <select id="nombre_departamento" value={value} name="nombre_departamento" onChange={(event)=>setValue(event.target.value)} className="form-control">
                        {departamentos.map(departamento =>(
                            <option key={departamento.ID_DEPARTAMENTO} value={departamento.ID_DEPARTAMENTO}>{departamento.NOMBRE_DEPARTAMENTO}</option>
                        ))}
                    </select>
                    ):(<p> No existe DEPARTAMENTOS</p>)}
                </div>
            </div>

            <div className="">
                <label
                    className=""
                    htmlFor="descripcion_cargo"
                >Cargo:</label>
                <div className="">
                    {cargos_empleado.length ?(
                        <select id="descripcion_cargo" value={valueC} name="descripcion_cargo" onChange={(event)=>setValueC(event.target.value)} className="form-control">
                            {cargos_empleado.filter(cargos=>cargos.ID_DEPARTAMENTO==value).map( cargo => (
                                <option key={cargo.ID_CARGO_EMPLEADO} value={cargo.DESCRIPCION_CARGO}>{cargo.DESCRIPCION_CARGO}</option>                         
                            ))}                        
                        </select>
                    ):(<p> No existe DEPARTAMENTOS</p>)}

                </div>
                
            </div>            
            
        </>
    )
}

export default Formulario
