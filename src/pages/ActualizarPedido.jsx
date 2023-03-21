import { useLocation } from "react-router-dom";
import {agregarPedido, obtenerPedido, actualizarPedido} from "../data/pedidos.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioActualizarPedido from "../components/FormularioActualizarPedido.jsx";
import {obtenerEmpleado} from "../data/empleados";
import {obtenerCliente} from "../data/clientes";
import {obtenerTodasFlotas} from "../data/flotas";
import {aumentarCantidad} from "../data/flotas";
import {disminuirCantidad} from "../data/flotas";

export async function loader({params}){
    const pedido =  await obtenerPedido(params.pedidoId)
    if (Object.values(pedido).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El pedido no fue encontrado'
        })
    }

    const cliente = await obtenerCliente(pedido.ID_CLIENTE)

    const empleado = await obtenerEmpleado(pedido.ID_EMPLEADO)

    const flotas = await obtenerTodasFlotas()

    console.log("Pedido en actualizar", pedido)
    return {pedido, cliente, empleado, flotas}
}

export async function action({request, params}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)

    const estado_pedido = formData.get('ESTADO_PEDIDO')
    console.log(estado_pedido)
    const flota = formData.get('ID_FLOTA')

    //Validacion
    const errores = []
    if (Object.values(datos).includes('')){
        errores.push('Todos los campos son necesarios')
        console.log(datos)
    }

    //Retornar datos si ha errores
    if (Object.keys(errores).length){
        return errores
    }

    // Actualizar Pedido
    await actualizarPedido(params.pedidoId, datos)
    if(estado_pedido==="ASIGNADO"){
        await aumentarCantidad(flota, datos)
    }
    if(estado_pedido==="ENTREGADO"){
        await disminuirCantidad(flota, datos)
    }
    return redirect('/opciones/pedidos')
}

function ActualizarPedido() {

    const navigate = useNavigate()
    const {pedido, cliente, empleado, flotas} = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Pedido</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un pedido</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Ciente</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"
                    

                >
                    <FormularioActualizarPedido 
                        pedido={pedido}
                        cliente={cliente}
                        empleado={empleado}
                        flotas={flotas}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                          shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                          focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                          active:shadow transition duration-150 ease-in-out"
                                value="Guardar Pedido"
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

export default ActualizarPedido;