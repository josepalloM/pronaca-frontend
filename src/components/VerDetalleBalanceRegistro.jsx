import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const VerDetalleBalanceRegistro = ({ balance }) => {


    return (
        <>
        <div className="mb-4 width: 400px; border: 1px solid black;">

            {/* */}
            <div className="mb-4 border-2 border-yellow-500 rounded-lg shadow-lg bg-yellow-50">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha"
                >Fecha de Informe:</label>
                <h1>{balance?.fecha}</h1>

            </div>

            {/* Activos*/}

            <h1 className="text-2xl font-bold mb-2">Activos:</h1>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Bancos"
                >Bancos:</label>
                <input
                    id="bancos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Bancos"

                    defaultValue={balance?.bancos}
                    name="bancos"

                /// add
                />
            </div>



            <label
                className="flex justify-start text-gray-800"
                htmlFor="inventario"
            >Inventario:</label>
            <div className="mb-4 flex">
                <input
                    id="inventario"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Inventario"

                    defaultValue={balance?.inventario}
                    name="inventario"

                /// add
                />

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/opciones/bodega">Ver</Link>

                </button>
            </div>




            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="CuentasporCobrarEmpleado"
                >Cuentas por Cobrar Cliente:</label>
            <div className="mb-4 flex">

                
                <input
                    id="cuentas_por_cobrar_emp"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cuentas por Cobrar Empleado"

                    defaultValue={balance?.cuentas_por_cobrar_cli}
                    name="cuentas_por_cobrar_emp"

                /// add
                />


                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/opciones/pedidos">Ver</Link>

                </button>
            </div>




            {/*iva en compras*/}


            
            
            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="IVA compras"
                >IVA Compras:</label>

            <div className="mb-4 flex">
                <input
                    id="iva_compras"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="IVA Compras"

                    defaultValue={balance?.iva_compras}
                    name="cuentas_por_cobrar_cli"


                />


                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/pedidosProveedor">Ver</Link>

                </button>

            </div>



            <div className="mb-4 border-2 border-green-500 rounded-lg shadow-lg bg-green-50">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Activos"
                >Activos:</label>
                <input
                    id="activos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 border-green-500 focus:border-green-500 focus:ring-green-500"
                    placeholder="Activos"
                    defaultValue={balance?.activos}
                    name="activos"
                />


            </div>

            <h1 className="text-2xl font-bold mb-2">Pasivos:</h1>


            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="CuentasporPagarProveedor"
                >Cuentas por pagar Proveedor:</label>
            <div className="mb-4 flex">

                <input
                    id="cuenta_pagar_proveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Cuentas por Pagar Proveedor"

                    defaultValue={balance?.cuenta_pagar_proveedor}
                    name="cuenta_pagar_proveedor"

                /// add
                />

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/pedidosProveedor">Ver</Link>

                </button>


            </div>



            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="IVAVentas"
                >IVA Ventas:</label>
            <div className="mb-4 flex">

                
                <input
                    id="iva_ventas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="IVA en Ventas"

                    defaultValue={balance?.iva_ventas}
                    name="iva_ventas"

                />

                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/opciones/pedidos">Ver</Link>

                </button>
            </div>



            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Aportes"
                >Aportes por pagar:</label>
            <div className="mb-4">

                
                <input
                    id="aportes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Aportes por Pagar"

                    defaultValue={balance?.aportes}
                    name="aportes"

                />


            </div>




            <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Nomina por Pagar"
                >Nómina por pagar:</label>
            <div className="mb-4 flex">

                <input
                    id="Nominaporpagar"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nomina por Pagar"

                    defaultValue={balance?.nomina}
                    name="nomina"
                />


                <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        state={location.state}
                        to="/empleados">Ver</Link>

                </button>



            </div>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Pasivos Fijos"
                >Pasivos Fijos:</label>
                <input
                    id="pasivosfijos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Pasivos Fijos"

                    defaultValue={balance?.pasivos_fijos}
                    name="pasivosfijos"

                />
            </div>



            <div className="mb-4 border-2 border-green-500 rounded-lg shadow-lg bg-green-50">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Pasivos"
                >Pasivos:</label>
                <input
                    id="pasivos"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Pasivos"

                    defaultValue={-balance?.pasivos}
                    name="pasivos"


                />
            </div>

            <h1 className="text-2xl font-bold mb-2">Patrimonio:</h1>

            <div className="mb-4">

                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="Patrimonio"
                >Patrimonio:</label>
                <input
                    id="patrimonio"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Patrimonio"
                    name="patrimonio"
                    defaultValue={-balance?.patrimonio}



                />
            </div>


        </div>



        </>
    )
}

export default VerDetalleBalanceRegistro
