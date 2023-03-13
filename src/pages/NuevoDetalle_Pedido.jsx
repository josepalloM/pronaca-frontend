import $ from 'jquery'
import { useState } from 'react';
import { useNavigate, Form, Link, useActionData, redirect, useLoaderData } from "react-router-dom"
import Error from "../components/Error";
import { obtenerPedido, obtenerPedidos } from "../data/pedidos";
import { obtenerBodega, actualizarBodega } from "../data/bodegas";
 import { obtenerUbicacion } from "../data/ubicaciones";
import { agregarDetalle_Pedido } from "../data/detalle_pedidos";
import {obtenerItemsVenta} from "../data/itemsVenta";
import { obtenerCliente } from "../data/clientes";
import ItemVenta from "../components/ItemVenta";

export async function loader(){
    const pedido = $(await obtenerPedidos()).get(-1)
    const pedidoEditar = await obtenerPedido(pedido.ID_PEDIDO)
    const clienteId = pedidoEditar.ID_CLIENTE
    const cliente = await obtenerCliente(clienteId)
     const ubicacion = await obtenerUbicacion(cliente.ID_UBICACION)
     const bodega = await obtenerBodega(ubicacion.ID_UBICACION)
    const items = await obtenerItemsVenta()
    return {pedido, pedidoEditar, clienteId, bodega, items}
}

export  async function action({request}){

  const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    console.log(datos)
  
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
      if(datos.length===0){
        errores.push('Agregue al menos un producto')
      }
    }
  
    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
    
    return redirect('/opciones/pedidos')
}

function NuevoPedido() {
    const {pedido, pedidoEditar, clienteId, bodega, items} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    const [detalle, setDetalle] = useState([]);
    const [aBodega, setABodega] = useState([]);

    const insertarItem = (numPedido, item, cantidad, subtotal, precio) =>{
        setDetalle(prevDetalle => [...prevDetalle, { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, subtotal_detalle_pedido:subtotal, precio_detalle_pedido: precio}])
    }

    function handleItems(){
      if(detalle.length===0){
        return(true)
      }else{
        return(false)
      }
    }

    const handleSubmit = (e) =>{
        console.log(detalle)
        agregarDetalle_Pedido(detalle)
        actualizarBodega(detalle, {id_cliente:clienteId})
    }

    return (
      <>
        <h1 className="font-black text-4xl text-black">Nuevo Pedido</h1>
        <p className="mt-3">
          Llena todos los campos para agregar un nuevo pedido
        </p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">
          Detalle Pedido
        </div>
        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
          {errores?.length &&
            errores.map((error, i) => <Error key={i}>{error}</Error>)}

          <Form method="POST" onSubmit={handleSubmit}>
            <div className="grid grid-cols gap-4">
              <div className="my-4">
                {" "}
                Pedido
                {
                  <input
                    id="id_pedido"
                    name="id_pedido"
                    type="text"
                    className="block w-1/4 p-3 bg-gray-50"
                    value={pedido.ID_PEDIDO}
                    readOnly
                  />
                }
              </div>

              <div className="my-4">
                Seleccione los productos
                {items.length ? (
                  <div
                    id="id_item"
                    name="id_item"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {items.map((item) => (
                      <ItemVenta
                        key={item.ID_ITEM}
                        pedido={pedido}
                        bodega={bodega}
                        item={item}
                        insertarItem={insertarItem}
                      />
                    ))}
                  </div>
                ) : (
                  <p> No existen Items</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="submit"
                  disabled={handleItems()}
                  className="inline-block w-10/12 px-8 py-2.5 bg-orange-300 text-black
                                    font-medium text-sm leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
                  value="Registrar Pedido"
                >
                  
                </input>
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
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Form>
        </div>
      </>
    );
}

export default NuevoPedido