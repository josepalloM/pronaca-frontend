import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerTransportes } from "../data/transporte"
import Transporte from "../components/Transporte"
import { pagarCuentasTransporte, obtenerCuentasTransporte, actualizarCuentasTransporte } from "../data/cuentas"
import { useState, useEffect } from 'react';
import { currencyFormatter } from "../utils/formatters";

export async function loader() {
  const transportes = await obtenerTransportes()

  return transportes
}

function Transportes() {

  const transporte = useLoaderData()

  const location = useLocation()
  const [datosTabla, setDatosTabla] = useState([]);

  useEffect(() => {
    // Aquí hacemos la llamada a la API para obtener los datos de la tabla
    obtenerDatosTabla();
  }, []);

  const obtenerDatosTabla = async () => {
    try {
      const datos = await obtenerCuentasTransporte(1)
      setDatosTabla(datos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActualizarTabla = async () => {
    // Aquí volvemos a hacer la llamada a la API para obtener los nuevos datos
    try {
      const datos = await obtenerCuentasTransporte(1)
      setDatosTabla(datos);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="font-black text-4xl ">Transporte</h1>
      <p>Administración de transporte</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/819/819873.png" alt="Imagen 1" className="w-20 h-20 object-contain" />
        </div>
        {transporte.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">RUC</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">Dirección</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {transporte.map(transporte => (
                <Transporte
                  transporte={transporte}
                  key={transporte.ID_TRANSPORTE}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existen transportes</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link
            state={location.state}
            to='/transporte/nuevo'>CREAR TRANSPORTE</Link>
        </button>
      </div>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">

        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">Cuenta</th>
              <th className="p-2">Monto</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla.map(cuentaTransporte => (
              <tr className="border-b">
                <td>
                  {cuentaTransporte.DESCRIPCION_CUENTA}
                </td>
                <td>
                  {currencyFormatter.format(Math.abs(cuentaTransporte.VALOR_CUENTA))}
                </td>
              </tr>

            ))}
          </tbody>
        </table>
        <button
          className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                active:shadow transition duration-150 ease-in-out"
          onClick={actualizarCuentas}
        >
          Actualizar cuentas por cobrar
        </button>

        <button
          className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                active:shadow transition duration-150 ease-in-out"
          onClick={pagarTransporte}
        >
          Pagar
        </button>
      </div>
    </>
  )
  async function pagarTransporte() {
    const valorPorPagar = Math.abs(datosTabla[1].VALOR_CUENTA);

    if (valorPorPagar == 0) {
      window.alert('No hay cuentas por pagar');
      return;
    }

    const confirmacion = window.confirm('¿Estás seguro de que deseas pagar las cuentas de transporte?');

    if (confirmacion) {
      await pagarCuentasTransporte(1)
      handleActualizarTabla();
    }
  }


  async function actualizarCuentas() {
    const confirmacion = window.confirm('¿Estás seguro de que deseas actualizar las cuentas por pagar de transporte?');

    if (confirmacion) {
      await actualizarCuentasTransporte(1)
      handleActualizarTabla();
    }
  }
}



export default Transportes