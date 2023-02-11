import {useState,useRef} from "react"

const FormularioAsiento = ({cuentas}) => {

    const [cuenta, setCuenta] = useState("")
    const [descripcionCuenta, setDescripcionCuenta] = useState("")
    const [valorCuentaHaber, setValorCuentaHaber] = useState("")
    const [valorCuentaDebe, setValorCuentaDebe] = useState("")

    var cuentasPadres = [];
    var idCuentasPadres = [];
    var cuentaAsientos = [];
    var cuentasHijos = [];
    var idCuentasHijos = [];
    var cuentaAsientos2 = [];
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    //cuentas Padres
    cuentasPadres = cuentas.filter(cuenta=>(cuenta.DESCRIPCION_CUENTA=="Bancos" || cuenta.DESCRIPCION_CUENTA=="Inventario" || cuenta.DESCRIPCION_CUENTA=="Cuentas por pagar" || cuenta.DESCRIPCION_CUENTA=="Ingresos" || cuenta.DESCRIPCION_CUENTA=="Costos" || cuenta.DESCRIPCION_CUENTA=="Gastos"))    
    cuentasPadres.forEach(cuenta=>idCuentasPadres.push(cuenta.ID_CUENTA))
    cuentaAsientos = cuentas.filter(cuenta => (idCuentasPadres.includes(cuenta.ID_CUENTA) == true)) 
    
    //ceuntas Hijos
    cuentasHijos = cuentas.filter(cuenta=>(cuenta.DESCRIPCION_CUENTA=="Inventario" || cuenta.DESCRIPCION_CUENTA=="Pago de nómina" || cuenta.DESCRIPCION_CUENTA=="Beneficios sociales" || cuenta.DESCRIPCION_CUENTA=="Ventas"|| cuenta.DESCRIPCION_CUENTA=="Costos operativos" ||cuenta.DESCRIPCION_CUENTA=="Costos de ventas" || cuenta.DESCRIPCION_CUENTA=="Gastos nómina"))    
    cuentasHijos.forEach(cuenta=>idCuentasHijos.push(cuenta.ID_CUENTA))
    cuentaAsientos2 = cuentas.filter(cuenta => (idCuentasHijos.includes(cuenta.ID_CUENTA) == true)) 

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_ASIENTO"
                    name="FECHA_ASIENTO"
                />
            </div>            
            
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="id_cuenta"
                >Cuenta:</label>
                <div className="">
                    {cuentaAsientos.length ?(
                        <select id="id_cuenta" value={cuenta} name="id_cuenta" onChange={(event)=>setCuenta(event.target.value)} className="form-control border-2 border-black">
                            <option>Selecciona una cuenta</option>
                            {cuentaAsientos.map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.DESCRIPCION_CUENTA}</option>                         
                            ))}
                                                   
                        </select>
                    ):(<p> No existe CUENTAS</p>)}

                </div>
                
            </div> 
            
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="descripcion_asiento"
                >Descripión de cuenta:</label>
                <div className="">
                    {cuentaAsientos2.length ?(
                        <select id="descripcion_asiento" value={descripcionCuenta} name="descripcion_asiento" onChange={(event)=>setDescripcionCuenta(event.target.value)} className="form-control border-2 border-black">
                            <option>Selecciona una cuenta</option>
                            {cuentaAsientos2.map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.DESCRIPCION_CUENTA}>{cuenta.DESCRIPCION_CUENTA}</option>                         
                            ))}
                                                   
                        </select>
                    ):(<p> No existe CUENTAS</p>)}

                </div>
                
            </div> 

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                >Código:</label>
                {cuentaAsientos2.length ?(      
                    cuentaAsientos2.filter(c => c.DESCRIPCION_CUENTA==descripcionCuenta).map( cuenta => (
                        <input 
                            key={cuenta.ID_CUENTA}
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                            placeholder="Código de la cuenta"
                            defaultValue={cuenta.CODIGO_CUENTA}
                        />                         
                    ))
                ):(<p> No existe Código</p>)}
            </div>
            
            

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="haber"
                >Haber:</label>
                <div className="">
                    {cuentas.length ?(
                        <select id="haber" value={valorCuentaHaber} name="haber" onChange={(event)=>setValorCuentaHaber(event.target.value)} className="form-control border-2 border-black">
                            <option>Monto</option>
                            {cuentas.filter(c=>c.DESCRIPCION_CUENTA==descripcionCuenta).map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.VALOR_CUENTA}>{cuenta.VALOR_CUENTA}</option>                         
                            ))}                        
                        </select>
                    ):(<p> No existe mONTO</p>)}

                </div>
                
            </div>  
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="debe"
                >Debe:</label>
                <div className="">
                    {cuentas.length ?(
                        <select id="debe" value={valorCuentaDebe} name="debe" onChange={(event)=>setValorCuentaDebe(event.target.value)} className="form-control border-2 border-black">
                            <option>Monto</option>
                            {cuentas.filter(c=>c.DESCRIPCION_CUENTA==descripcionCuenta).map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.VALOR_CUENTA}>{cuenta.VALOR_CUENTA}</option>                         
                            ))}                        
                        </select>
                    ):(<p> No existe mONTO</p>)}

                </div>
                
            </div>             
            
        </>
    )
}

export default FormularioAsiento