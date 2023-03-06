import { useNavigate, Form, Link, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioPedido from "../components/FormularioPedido";
import Error from "../components/Error";
import { agregarPedido } from "../data/pedidos";
import {obtenerEmpleados} from "../data/empleados";
import {obtenerClientes} from "../data/clientes";

export async function loader(){
    const empleados =  await obtenerEmpleados()
    const clientes =  await obtenerClientes()
    return {empleados, clientes}
}

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
  
    await agregarPedido(datos)
  
    return redirect('/opciones/pedido/detalle/nuevo')
}

function NuevoPedido() {
    const {empleados, clientes} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nuevo Pedido</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo pedido</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Pedido</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form 
                    method="POST"
                >

                    <FormularioPedido clientes={clientes} empleados={empleados} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                                value="Siguiente"
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

export default NuevoPedido