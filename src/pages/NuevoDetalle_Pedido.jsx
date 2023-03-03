import $ from 'jquery'
import { useState } from 'react';
import { useNavigate, Form, Link, useActionData, redirect, useLoaderData } from "react-router-dom"
import Error from "../components/Error";
import { obtenerPedidos } from "../data/pedidos";
import { obtenerPedido } from "../data/pedidos";
import { actualizarBodega } from "../data/bodegas";
import { agregarDetalle_Pedido } from "../data/detalle_pedidos";
import {obtenerItemsVenta} from "../data/itemsVenta";
import ItemVenta from "../components/ItemVenta";

export async function loader(){
    const pedido = $(await obtenerPedidos()).get(-1)
    const pedidoEditar = await obtenerPedido(pedido.ID_PEDIDO)
    const clienteId = pedidoEditar.ID_CLIENTE
    const items = await obtenerItemsVenta()
    return {pedido, pedidoEditar, clienteId, items}
}

export  async function action({request}){
    
    return redirect('/opciones/pedidos')
}

function NuevoPedido() {
    const {pedido, pedidoEditar, clienteId, items} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    const [detalle, setDetalle] = useState([]);
    const [newPedido, setNewPedido] = useState(pedidoEditar);

    const insertarItem = (numPedido, item, cantidad, subtotal, precio) =>{
        setDetalle(prevDetalle => [...prevDetalle, { id_pedido: numPedido, id_item: item, cantidad_pedido:cantidad, subtotal_detalle_pedido:subtotal, precio_detalle_pedido: precio}])
        // console.log(detalle)
        // const precioPedido =+ precio
        // setNewPedido(prevPedido => [...prevPedido, { iva_pedido: precio*0.12, subtotal_pedido: precio-precio*0.12, total_pedido: precio}])
        console.log(newPedido)
    }

    const handleSubmit = (e) =>{
        console.log(detalle)
        agregarDetalle_Pedido(detalle)
        //actualizar bodegas (cantidad, idItem, ubicacion)
        // actualizarBodega(detalle, clienteId)
        console.log(detalle, clienteId)

        ////quitarCantidadBodega////
        // actualizarPedido(detalle.ID_PEDIDO, newPedido)


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

            {/* <FormularioDetalle_Pedido 
                    pedido={pedido} 
                    items={items} 
                    /> */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="submit"
                  // onClick={submit}
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