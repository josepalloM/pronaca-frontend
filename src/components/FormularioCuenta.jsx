import { Link, useLoaderData } from "react-router-dom";
import {useState} from "react"

const FormularioCuenta = ({cuentas}) => {

    const [informeFinanciero, setInforme] = useState("")
    const [idCueIdCuenta, setCueIdCuenta] = useState("")

    return (
        <>
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="descripcion_cuenta"
                >Nombre:</label>
                <input 
                    id="descripcion_cuenta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Nombre de la cuenta"
                    name="descripcion_cuenta"
                />
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="codigo_cuenta"
                >Código:</label>
                <input 
                    id="codigo_cuenta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Código de la cuenta"
                    name="codigo_cuenta"
                />
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="valor_cuenta"
                >Monto:</label>
                <input 
                    id="valor_cuenta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    placeholder="Valor de la cuenta"
                    name="valor_cuenta"
                />
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="id_informe_financiero"
                >Informe Financiero:</label>
                <div className="">
                    <select id="id_informe_financiero" value={informeFinanciero} name="id_informe_financiero" onChange={(event)=>setInforme(event.target.value)} className="form-control border-2 border-black">
                        <option >Selecciona un informe</option>
                        <option value={1}>Balance General</option>
                        <option value={2}>Estado de resultados</option>
                    </select>                 
                </div>
            </div>

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="cue_id_cuenta"
                >Cuenta Padre:</label>
                <div className="">
                    {cuentas.length ?(
                        <select id="cue_id_cuenta" value={idCueIdCuenta} name="cue_id_cuenta" onChange={(event)=>setCueIdCuenta(event.target.value)} className="form-control border-2 border-black">
                            <option>Selecciona una cuenta</option>
                            {cuentas.map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.CODIGO_CUENTA} {cuenta.DESCRIPCION_CUENTA}</option>                         
                            ))}                        
                        </select>
                    ):(<p> No existe CUENTAS</p>)}

                </div>
                
            </div>            
            
        </>
    )
}

export default FormularioCuenta