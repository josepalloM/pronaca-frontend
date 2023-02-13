import { Link, useLoaderData } from "react-router-dom";
import {useState, useForm} from "react"

const FormularioBalance = (informe_financiero_balance) => {

    
  
    return (
        <>
            <div className="my-4">
                <p>Fecha Inicio: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_INICIO"
                    name="FECHA_INICIO"
                />
            </div>  

            <div className="my-4">
                <p>Fecha Fin: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_FIN"
                    name="FECHA_FIN"
                />
            </div>     



            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="patrimonio_empleado"
                >Patrimonio:</label>
                <input 
                    id="patrimonio_empleado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="patrimonio del empleado"
                    name="patrimonio_empleado"
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="activos_balance"
                >Activos:</label>
                <input 
                    id="activos_balance"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Apellido del empleado"
                    name="activos_balance"
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="pasivos_balance"
                >Pasivos:</label>
                <input 
                    id="pasivos_balance"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Cedula del empleado"
                    name="pasivos_balance"
                    //pattern="[0-9]{10}"
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="resultado"
                >Resultado:</label>
                <input 
                    id="resultado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="E-mail del empleado"
                    name="resultado"
                    //pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$"
                />
            </div>
          
            
        </>
    )
}

export default FormularioBalance


