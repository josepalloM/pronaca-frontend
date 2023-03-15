import { useNavigate, Form, Link, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioPedidoProveedor from "../components/FormularioPedidoProveedor";
import Error from "../components/Error";
import { agregarPedidoProveedor } from "../data/pedidosProveedor";
import {obtenerProveedores} from "../data/proveedores";
import { obtenerItems } from "../data/items";

export async function loader(){
    const proveedores =  await obtenerProveedores()
    const items = await obtenerItems()
    return {proveedores, items}
}

export  async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

  
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }else{
        if(datos.CANTIDAD_PEDIDO==0){
            errores.push('Ingrese una cantidad diferente de cero')
        }
    }
  
    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
  
    await agregarPedidoProveedor(datos)
  
    return redirect('/proveedoresOpciones/pedidosProveedor')
}

function NuevoPedidoProveedor() {
    const {proveedores, items} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nuevo Pedido Proveedores</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo pedido</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Pedido proveedores</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form 
                    method="POST"
                >

                    <FormularioPedidoProveedor proveedores={proveedores} items={items}/>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                                value="Registrar pedido"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                                onClick={() => navigate(-1)}
                            >Cancelar</button>
                        </div>        
                    </div>
                    
                </Form>
            </div>
        </>
    )
}

export default NuevoPedidoProveedor