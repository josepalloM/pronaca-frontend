import { useLocation } from "react-router-dom";
import {agregarPedidoProveedor, obtenerPedidoProveedor, actualizarPedidoProveedor} from "../data/pedidosProveedor";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioActualizarPedidoProveedor from "../components/FormularioActualizarPedidoProveedor";
import {obtenerProveedor} from "../data/proveedores";

export async function loader({params}){
    const pedidoProveedor =  await obtenerPedidoProveedor(params.pedidoProveedorId)
    if (Object.values(pedidoProveedor).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El pedido no fue encontrado'
        })
    }

    const proveedor = await obtenerProveedor(pedidoProveedor.ID_PROVEEDOR)
    console.log(proveedor)

    return {pedidoProveedor, proveedor}
}

export async function action({request, params}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)

    //Validacion
    const errores = []
    if (Object.values(datos).includes('')){
        errores.push('Todos los campos sosn necesarios')
    }

    //Retornar datos si ha errores
    if (Object.keys(errores).length){
        return errores
    }

    // Actualizar Pedido
    await  actualizarPedidoProveedor(params.pedidoProveedorId, datos)
    return redirect('/item/nuevo')
}

function ActualizarPedidoProveedor() {

    const navigate = useNavigate()
    const {pedidoProveedor, proveedor} = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar pedido del proveedor</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un pedido</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Pedido</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"
                    

                >
                    <FormularioActualizarPedidoProveedor 
                        pedidoProveedor={pedidoProveedor}
                        proveedor={proveedor}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                          shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                          focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                          active:shadow transition duration-150 ease-in-out"
                                value="Guardar pedido"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
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
    );
}

export default ActualizarPedidoProveedor;