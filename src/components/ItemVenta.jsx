import { useState } from "react";

function ItemVenta({ item, pedido, insertarItem }) {
  const [cantidad, setCantidad] = useState(0);

  const { ID_ITEM, NOMBRE_ITEM, PRECIO_ITEM } = item;

  const { ID_PEDIDO } = pedido;

  return (
    <>
      <div
        key={ID_ITEM}
        className="grid-cols-3 block p-3 m-3 bg-gray-50 text-center rounded overflow-hidden shadow-lg"
      >
        <input
          defaultValue={ID_ITEM}
          id="id_item"
          name="id_item"
          type="hidden"
        ></input>
        <div>
          <div>{NOMBRE_ITEM}</div>
          <div className="text-left ml-5">
            Precio:{" "}
            <input
              id="precio_detalle_pedido"
              name="precio_detalle_pedido"
              defaultValue={(PRECIO_ITEM * 1.2).toFixed(2)}
              className="text-center"
            />
          </div>
          <input
            id="cantidad_pedido"
            name="cantidad_pedido"
            type="number"
            className="block w-full p-3 bg-gray-50 text-center"
            // placeholder={cantidad}
            defaultValue={0}
            onChange={(event) => setCantidad(event.target.valueAsNumber)}
          />
          <div>${(PRECIO_ITEM * 1.2 * cantidad).toFixed(2)}</div>
          <button
            type="button"
            onClick={() =>
              insertarItem(
                ID_PEDIDO,
                ID_ITEM,
                cantidad,
                (PRECIO_ITEM * cantidad).toFixed(2),
                (PRECIO_ITEM * 1.2 * cantidad).toFixed(2)
              )
            }
          >
            Añadir producto
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemVenta;
