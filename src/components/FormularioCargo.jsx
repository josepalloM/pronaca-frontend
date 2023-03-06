import {useState} from "react"

const FormularioCargo = ({ departamentos}) => {

    const [cargo, setCargo] = useState("")

    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="descripcion_cargo"
                >Descripción del cargo: </label>
                <input
                    id="descripcion_cargo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Descripción del cargo"
                    name="descripcion_cargo" /><br></br>
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="id_departamento"
                >Departamento:</label>
                <div className="">
                    {departamentos.length ? (
                        <select id="id_departamento" value={cargo} name="id_departamento" 
                        
                        onChange={(event) => setValue(event.target.value)} className="border border-gray-500 rounded py-2 px-3 block w-full appearance-none leading-tight focus:outline-none focus:bg-white">
                            <option >Selecciona un departamento</option>
                            {departamentos.map(departamento => (
                                <option key={departamento.ID_DEPARTAMENTO} value={departamento.ID_DEPARTAMENTO}>{departamento.NOMBRE_DEPARTAMENTO}</option>
                                
                            ))}
                        </select>
                    ) : (<p> No existe DEPARTAMENTOS</p>)}
                </div>
            </div>
        </>
    )
}

export default FormularioCargo