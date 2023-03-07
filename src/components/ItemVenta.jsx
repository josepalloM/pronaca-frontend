import { useState } from "react";

 function ItemVenta({ item, pedido, bodega, insertarItem }) {
   const [cantidad, setCantidad] = useState(0);

   const { ID_ITEM, NOMBRE_ITEM, PRECIO_ITEM } = item;

   const { ID_PEDIDO } = pedido;

   const [stock, setStock] = useState(
     bodega.find((elemento) => elemento.NOMBRE_ITEM === NOMBRE_ITEM).CANTIDAD
   );

   const quitar = (event) => {
     if (cantidad <= 0) {
       setCantidad(0);
     } else {
       setCantidad(cantidad - 1);
     }
   };
   const agregar = (event) => {
     setCantidad(cantidad + 1);
   };

   const handleAgregarProducto = () => {
     if (cantidad == 0) {
       alert("No se puede agregar 0 productos");
     } else {
       if (cantidad > stock) {
         alert(
           "No hay suficiente stock del producto en la bodega. Por favor, ingrese un valor menor o igual al stock disponible."
         );
       } else {
         insertarItem(
           ID_PEDIDO,
           ID_ITEM,
           cantidad,
           (PRECIO_ITEM * cantidad).toFixed(2),
           (PRECIO_ITEM * 1.2 * cantidad).toFixed(2)
         );
         alert("Agregado " + cantidad + " " + NOMBRE_ITEM);
       }
     }
   };

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
           Stock: {stock}
           <div className="text-left ml-5">
             Precio unitario:
             <input
               id="precio_detalle_pedido"
               name="precio_detalle_pedido"
               defaultValue={"$" + (PRECIO_ITEM * 1.2).toFixed(2)}
               className="text-center"
             />
           </div>
           <div className="grid-cols-3 flex items-center">
             <div
               className="flex bg-red-500 w-1/3 m-1 rounded justify-center"
               onClick={quitar}
             >
               -
             </div>
             <input
               id="cantidad_pedido"
               name="cantidad_pedido"
               type="number"
               min={0}
               max={100}
               className="flex w-1/2 p-3 m-1 bg-gray-200 rounded text-center"
               onChange={(event) => setCantidad(event.target.valueAsNumber)}
               value={cantidad}
             />
             <div
               className="flex bg-green-500 w-1/3 m-1 rounded justify-center"
               onClick={agregar}
             >
               +
             </div>
           </div>
           <div>
             <div>Total:</div>${(PRECIO_ITEM * 1.2 * cantidad).toFixed(2)}
           </div>
           <button
             type="button"
             className="mt-3 rounded bg-orange-200 hover:bg-orange-400 p-2 uppercase font-bold text-black text-sm"
             onClick={handleAgregarProducto}
           >
             Añadir producto
           </button>
        </div>
      </div>
    </>
  );
}
export default ItemVenta;