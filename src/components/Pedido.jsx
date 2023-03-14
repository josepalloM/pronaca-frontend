import { useState } from "react";
import Invoice from '../components/Invoice'
// import Modal from '../components/Modal'
import { Link, Form, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { eliminarPedido } from "../data/pedidos.js";
import { obtenerDetalle_Pedidos } from "../data/detalle_pedidos";

export async function action({ params }) {
  console.log("ID eliminar pedido ", params.pedidoId);
  await eliminarPedido(params.pedidoId);
  return redirect("/opciones/pedidos");
}

//  function loader({params}) {
//   const detalle_pedidos = obtenerDetalle_Pedidos(params.pedidoId)
//   console.log('detalles de pedidos',detalle_pedidos)
//   return detalle_pedidos
// }

// async function obtener (id){
//   const detalle_pedidos = await obtenerDetalle_Pedidos(id)
//   return detalle_pedidos
// }

function Pedido({ pedido }) {
  
  const navigate = useNavigate();
  const {
    FECHA_PEDIDO,
    NOMBRE_EMPLEADO,
    APELLIDO_EMPLEADO,
    NOMBRE_CLIENTE,
    APELLIDO_CLIENTE,
    ESTADO_PEDIDO,
    ID_PEDIDO

  } = pedido;

  // const [detalle, setDetalle] = useState([])
  // obtener(ID_PEDIDO).then(detalle_pedidos => {setDetalle(detalle_pedidos)})
  // console.log('Detalles de pedidos',detalle)

  // console.log('Detalles de pedidos',detalle_pedidos)
  const [showModal, setShowModal] = useState(false);
  // const detalle_pedidos = useLoaderData()


  

  const [deleteVar, setDeleteVar] = useState(false)

  const handleEditar = () => {
    if(ESTADO_PEDIDO=="Entregado"){
      alert("El pedido ya ha sido entregado")
    }else{
      navigate(`/pedido/${ID_PEDIDO}/editar`)
    }
  }

  function handleEliminar(){
    return ESTADO_PEDIDO=="Entregado";
  }

  return (
    <>
    <tr className="border-b">
    
      <td className="">{ID_PEDIDO}</td>
      <td>{FECHA_PEDIDO}</td>
      <td>
        {NOMBRE_EMPLEADO} {APELLIDO_EMPLEADO}
      </td>
      <td>
        {NOMBRE_CLIENTE} {APELLIDO_CLIENTE}
      </td>
      <td>{ESTADO_PEDIDO}</td>
      <td className="p-4 flex justify-center gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
        >
          <Link state={location.state} to={`/opciones/detalle_pedidos/${ID_PEDIDO}`}>
            Ver
          </Link>
        </button>

        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          // onClick={() => navigate(`/pedido/${ID_PEDIDO}/editar`)}
          onClick={handleEditar}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/opciones/pedidos/${ID_PEDIDO}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            disabled={handleEliminar()}
            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs disabled:text-gray-400"
          >
            Eliminar
          </button>
        </Form>


        <button
        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs active:bg-orange-600 rounded focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Factura
      </button>
      </td>
    </tr>
    {/* <Invoice invoice={invoice} /> */}






    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                {/* </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Invoice pedido={pedido}  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            {/* </div> */}
          </div>
        </>
      ) : null}




    </>
  );
}

export default Pedido;
