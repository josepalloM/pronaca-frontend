import { useState } from "react";
const FormularioActualizarFlota = ({ flota, ubicaciones, transporte }) => {
  //console.log("Flota en actualizar FORM", flota)
  //console.log("Flota ESTADO en actualizar FORM", flota.flota.ESTADO_FLOTA)
  //console.log("Ubicaciones en actualizar FORM", ubicaciones)
  const [ubicacion, setUbicacion] = useState("");
  console.log(ubicaciones);
  const [cantidad, setCantidad] = useState(flota.CAPACIDAD_FLOTA);
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

  return (
    <>
      <input
        id="ID_TRANSPORTE"
        name="ID_TRANSPORTE"
        type={"hidden"}
        defaultValue={transporte?.ID_TRANSPORTE}
        readOnly
      />
      <div className="mb-4">
        <label
          className="flex justify-start text-gray-800"
          htmlFor="SECTOR_FLOTA"
        >
          Sector:
        </label>
        <div className="">
          {ubicaciones.length ? (
            <select
              id="SECTOR_FLOTA"
              name="SECTOR_FLOTA"
              onChange={(event) => setUbicacion(event.target.value)}
              className="form-control border-2 border-black"
              defaultValue={flota?.SECTOR_FLOTA}
            >
              <option>Selecciona una zona</option>
              {ubicaciones.map((ubicacion) => (
                <option
                  key={ubicacion.ID_UBICACION}
                  value={ubicacion.ZONA_UBICACION}
                >
                  {ubicacion.ZONA_UBICACION}
                </option>
              ))}
            </select>
          ) : (
            <p> No existen Ubicaciones</p>
          )}
        </div>
        {/* <input
          id="SECTOR_FLOTA"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Sector del flota"
          name="SECTOR_FLOTA"
        /> */}
      </div>
      <div className="mb-4">
        <label
          className=" flex justify-start text-gray-800"
          htmlFor="ESTADO_FLOTA"
        >
          Estado:
        </label>
        <input
          id="ESTADO_FLOTA"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Estado del flota"
          name="ESTADO_FLOTA"
          defaultValue={flota?.ESTADO_FLOTA}
        />
      </div>
      <input
        id="CANTIDAD_PEDIDOS_FLOTA"
        name="CANTIDAD_PEDIDOS_FLOTA"
        type="hidden"
        className="flex w-1/2 p-3 m-1 bg-gray-200 rounded text-center"
        value={0}
      />
      <div className="grid grid-cols-2 flex items-center">
        <div className="">Capacidad</div>
        <div className="col-span-1 grid-cols-3 flex items-center">
          <div
            className="flex bg-red-500 w-1/3 m-1 rounded justify-center"
            onClick={quitar}
          >
            -
          </div>
          <input
            id="CAPACIDAD_FLOTA"
            name="CAPACIDAD_FLOTA"
            type="number"
            min={0}
            max={20}
            className="flex w-1/2 p-3 m-1 bg-gray-200 rounded text-center"
            onChange={(event) => setCantidad(event.target.valueAsNumber)}
            defaultValue={flota?.CAPACIDAD_FLOTA}
            value={cantidad}
          />
          <div
            className="flex bg-green-500 w-1/3 m-1 rounded justify-center"
            onClick={agregar}
          >
            +
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className=" flex justify-start text-gray-800"
          htmlFor="ESTADO_FLOTA"
        >
          Costo:
        </label>
        <input
          id="COSTO_FLOTA"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="2.56"
          name="COSTO_FLOTA"
          defaultValue={flota?.COSTO_FLOTA}
        />
      </div>
    </>
  );
};

export default FormularioActualizarFlota;
