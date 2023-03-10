
import {  Link } from "react-router-dom";

const VerDetalleEstadoRegistro = ({estado, parametro_isr}) => {
    const isr=parametro_isr.VALOR
const utilidad_sin_impuesto=(estado?.ingresos)-(estado?.costos)
    return (
        <>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha"
                >Fecha de Informe:</label>
                <h1>{estado?.fecha}</h1>
            </div>

            <div className="mb-4">

            <label
                className="flex justify-start text-gray-800"
                htmlFor="Ingresos"
            >Ingresos de Ventas:</label>
            <input
                id="ingresos"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Ingresos"

                defaultValue={estado?.ingresos}
                name="ingresos"
            />

            


            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Costos"
                >Costos de Ventas:</label>
                <input
                    id="costos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Costos"

                    defaultValue={estado?.costos}
                    name="costos"

                /// add
                />

                

            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Utilidad sin Impuestos"
                >Utilidad antes del Impuesto</label>
                <input
                    id="utilidad_sin_impuestos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="utilidad sin impuestos"
                    name="gastos"
                    defaultValue={(utilidad_sin_impuesto).toFixed(2)}


                />
            </div>


            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="impuesto"
                >Impuesto % ISR:</label>
                <input
                    id="IMPUESTO"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="ISR"

                    defaultValue={isr*100}
                    name="isr"

                /// add
                />
            </div>


            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800 font-bold"
                    htmlFor="Utilidad Neta"
                >Utilidad Neta:</label>
                <input
                    id="utilidad_neta"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="utilidad neta"
                    name="utilidad_neta"
                    defaultValue={(utilidad_sin_impuesto*(1-isr)).toFixed(2)}


                />

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/opciones/pedidos">Validar Cuentas</Link>

                </button>
            </div>





        </>
    )
}

export default VerDetalleEstadoRegistro
