import $ from 'jquery'
import { useNavigate, Form, Link, useActionData, redirect, useLoaderData } from "react-router-dom"
import Error from "../components/Error";
import { obtenerPedidos } from "../data/pedidos";
import { agregarDetalle_Pedido } from "../data/detalle_pedidos";
import FormularioDetalle_Pedido from "../components/FormularioDetalle_Pedido";
import {obtenerItemsVenta} from "../data/itemsVenta";

export async function loader(){
    const pedidos =  await obtenerPedidos()
    const pedido = $(pedidos).get(-1)
    const items = await obtenerItemsVenta()
    return {pedido, items}
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
  
    await agregarDetalle_Pedido(datos)
  
    console.log(datos)
    return redirect('/opciones/pedidos')
}

// const submit = (e) => {
//     e.preventDefault();
//     console.log(inputFields)
// }

function NuevoPedido() {
    const {pedido, items} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nuevo Pedido</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo pedido</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Detalle Pedido</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form 
                    method="POST"
                >

                    <FormularioDetalle_Pedido pedido={pedido} items={items} />
                    <div className="grid grid-cols-2 gap-2">
                        
                    {/* <Link
                            state={location.state}
                            className={`${location.pathname === '/'}`}
                                    to='/opciones/pedido/seleccionarItems'>
                                    <button type="submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                Pedidos 
                            </button>
                        </Link> */}
                        <div>
                            <button
                                type="submit"
                                // onClick={submit}
                                className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                                value="Registrar Pedido"
                            >Registrar Pedido</button>
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