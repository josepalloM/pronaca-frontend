import {useState,useRef} from "react"
import {Form, redirect} from "react-router-dom"
import { agregarDetalleAsiento } from "../data/detalle_asiento"

export  async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
  
    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
  
    await agregarDetalleAsiento(datos)
  
    return redirect('/finanzas/asientos/nuevo/nuevaCuentaAsiento')
  }

const FormularioDetalleAsiento = ({cuentas}) => {
    
    const [descripcionCuenta, setDescripcionCuenta] = useState("")

    var cuentasHijos = [];
    var idCuentasHijos = [];
    var cuentaAsientos2 = [];
    //ceuntas Hijos
    cuentasHijos = cuentas.filter(cuenta=>(cuenta.DESCRIPCION_CUENTA=="Banco Pichincha"||cuenta.DESCRIPCION_CUENTA=="Banco Internacional"||cuenta.DESCRIPCION_CUENTA=="Materia prima" || 
    cuenta.DESCRIPCION_CUENTA=="Insumos"||cuenta.DESCRIPCION_CUENTA=="Producto"|| cuenta.DESCRIPCION_CUENTA=="Aporte personal por pagar" || cuenta.DESCRIPCION_CUENTA=="Aporte patronal por pagar" || 
    cuenta.DESCRIPCION_CUENTA=="Nómina por pagar" || cuenta.DESCRIPCION_CUENTA=="Ventas" ||cuenta.DESCRIPCION_CUENTA=="Devoluciones" ||cuenta.DESCRIPCION_CUENTA=="Costos personal comercial" || 
    cuenta.DESCRIPCION_CUENTA=="Costos personal producción"||cuenta.DESCRIPCION_CUENTA=="Costos de ventas de mercancia"|| cuenta.DESCRIPCION_CUENTA=="Gastos personal administrativo" ||cuenta.DESCRIPCION_CUENTA=="Gastos personal financiero"))    
    cuentasHijos.forEach(cuenta=>idCuentasHijos.push(cuenta.ID_CUENTA))
    cuentaAsientos2 = cuentas.filter(cuenta => (idCuentasHijos.includes(cuenta.ID_CUENTA) == true)) 

    return (
        <>     
            <Form
            method="POST"
            >
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="cuenta"
                >Descripión de cuenta:</label>
                <div className="">
                    {cuentas.length ?(
                        <select id="cuenta" value={descripcionCuenta} name="cuenta" onChange={(event)=>setDescripcionCuenta(event.target.value)} className="form-control border-2 border-black">
                            <option>Selecciona una cuenta</option>
                            {cuentas.map( cuenta => (
                                <option key={cuenta.ID_CUENTA} value={cuenta.DESCRIPCION_CUENTA}>{cuenta.CODIGO_CUENTA} {cuenta.DESCRIPCION_CUENTA}</option>                         
                            ))}
                                                   
                        </select>
                    ):(<p> No existe CUENTAS</p>)}

                </div>
                
            </div> 

            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="codigo_cuenta"
                >Código: 
                {cuentaAsientos2.length ?(      
                    cuentaAsientos2.filter(c => c.DESCRIPCION_CUENTA==descripcionCuenta).map( cuenta => (
                        <h3 key={cuenta.ID_CUENTA}
                            id="codigo_cuenta"
                            placeholder="Código de la cuenta"
                            name="codigo_cuenta"
                        >{cuenta.CODIGO_CUENTA} </h3>                    
                    ))
                ):(<p> No existe Código</p>)}
                </label>
            </div>
            
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                >Monto:   
                {cuentaAsientos2.length ?(      
                    cuentaAsientos2.filter(c => c.DESCRIPCION_CUENTA==descripcionCuenta).map( cuenta => (
                        <h3
                            key={cuenta.ID_CUENTA}
                            placeholder="Monto de la cuenta"
                            
                        >{cuenta.VALOR_CUENTA} </h3>                        
                    ))
                ):(<p> No existe Monto</p>)}
                </label>
            </div>  
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="debe"
                >Debe:</label>
                <input 
                    id="debe"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    defaultValue="0"
                    name="debe"
                />   
            </div>
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="haber"
                >Haber:</label>
                <input 
                    id="haber"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                    name="haber"
                    defaultValue="0"
                />              
            </div>  
            
            <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="submit"
                    className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                    value="Registrar Cuenta"
                  />
                </div>      
              </div>             
            </Form>
        </>
    )
}

export default FormularioDetalleAsiento