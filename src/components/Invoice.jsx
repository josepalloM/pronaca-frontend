import React, { useState } from 'react';
import { format } from 'date-fns';
import { currencyFormatter } from '../utils/formatters';
import { obtenerDetalle_Pedidos } from "../data/detalle_pedidos"
import TablaDetalle from './TablaDetalle';

async function detalles(id){
  const detalles = await obtenerDetalle_Pedidos(id)
  return detalles
}

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

  const detalle_pedidos = detalles(pedido.ID_PEDIDO)
  console.log('Detallesssss', detalle_pedidos)

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-8 mt-8">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold">Pedido #{ID_PEDIDO}</h2>
          <p className="text-gray-600">{format(new Date(FECHA_PEDIDO), 'yyyy MM dd')}</p>
        </div>
        
      </div>
      <div className="mb-8">
        <h3 className="text-gray-600 font-bold mb-2">Items</h3>

        {/* ////////// */}

        <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {detalle_pedidos.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Items</th>
                <th className="p-2">Cantidad</th>
                <th className="p-2">Subtotal</th>
                <th className="p-2">Precio</th>
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
        ) : (<p className="text-center mt-10"> No existe pedidos</p>)}
      </div>

        
        {/* //////////// */}
      </div>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{currencyFormatter.format(SUBTOTAL_PEDIDO)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Taxes</span>
          <span>{currencyFormatter.format(IVA_PEDIDO)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{currencyFormatter.format(TOTAL_PEDIDO)}</span>
        </div>
      </div>
      <div>
        <p className="text-gray-600">Thank you for your business!</p>
      </div>
    </div>
  );
};

export default Invoice;
