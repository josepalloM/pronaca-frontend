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
                                <option key={cuenta.ID_CUENTA} value={cuenta.ID_CUENTA}>{cuenta.CODIGO_CUENTA} {cuenta.DESCRIPCION_CUENTA}</option>                         
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
                {cuentas.length ?(      
                    cuentas.filter(c => c.ID_CUENTA==descripcionCuenta).map( cuenta => (
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
                {cuentas.length ?(      
                    cuentas.filter(c => c.ID_CUENTA==descripcionCuenta).map( cuenta => (
                        <h3
                            key={cuenta.ID_CUENTA}
                            placeholder="Monto de la cuenta"
                            
                        >{Math.abs(cuenta.VALOR_CUENTA)} </h3>                        
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