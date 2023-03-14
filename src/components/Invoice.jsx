import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { currencyFormatter } from '../utils/formatters';
import { obtenerDetalle_Pedidos } from "../data/detalle_pedidos"
import TablaDetalle from './TablaDetalle';

const Invoice = ({ pedido }) => {
  const {
    FECHA_PEDIDO,
    NOMBRE_CLIENTE,
    APELLIDO_CLIENTE,
    ID_PEDIDO,
    IVA_PEDIDO,
    SUBTOTAL_PEDIDO,
    TOTAL_PEDIDO
  } = pedido;

  const [detalle_pedidos, setDetalle_pedidos] = useState([])
  useEffect(() => {
    const detalles = async () => {
        const detalle = await obtenerDetalle_Pedidos(pedido.ID_PEDIDO)
        setDetalle_pedidos(detalle)
    }
    detalles()
  }, [pedido.ID_PEDIDO])

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-8">
      <div className="flex justify-between flex-wrap mb-8">
        <div>
          <h1 className="text-3xl font-bold">Factura</h1>
          <p className="text-gray-600">ID de Pedido: {ID_PEDIDO}</p>
          <p className="text-gray-600">{format(new Date(FECHA_PEDIDO), 'd/MM/yyyy')}</p>
          <p className="pt-16 font-bold">Cliente: {NOMBRE_CLIENTE} {APELLIDO_CLIENTE}</p>
        </div>
        <div className="flex flex-col text-right">
          <img src="https://www.pronaca.com/wp-content/uploads/2022/04/cropped-favicon.png" alt="Logo" className="w-24 flex-shrink-0" />
          <p className="font-bold">PRONACA</p>
          <p className="text-gray-600">De los Naranjos<br/>N44-15</p>
          <p className="text-gray-600">Quito, Ecuador</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Detalles del Pedido</h2>

        <div className="rounded-md md: w-11/12 mx-auto px-5 mt-5">
          {detalle_pedidos.length ? (
            <table className="w-full bg-white shadow mt-5 table-auto text-center">
              <thead className="bg-gray-100 text-gray-600 uppercase text-center">
                <tr>
                  <th className="p-2 w-full">Detalle</th>
                  <th className="p-2">Cantidad</th>
                  <th className="p-2">Precio Unitario</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {detalle_pedidos.map(detalle_pedido => (
                  <TablaDetalle
                    detalle_pedido={detalle_pedido}
                    key={detalle_pedido.ID_DETALLE_PEDIDO}
                  />
                ))}
              </tbody>
            </table>
          ) : (<p className="text-center mt-10">No hay detalles para mostrar</p>)}
        </div>

      </div>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>{currencyFormatter.format(SUBTOTAL_PEDIDO)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>IVA 12%:</span>
          <span>{currencyFormatter.format(IVA_PEDIDO)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>{currencyFormatter.format(TOTAL_PEDIDO)}</span>

        </div>
      </div>
    </div>
  );
};

export default Invoice;
