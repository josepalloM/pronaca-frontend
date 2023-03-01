import { useLoaderData, Link, useLocation } from "react-router-dom";
import { obtenerBalance } from "../data/balance";
import Balance from "../components/Balance";
import { useState } from "react";
import VerDetalleBalance from "../components/VerDetalleBalanceRegistro.jsx";

export async function loader() {
const balance = await obtenerBalance();
return { balance };
}
export async function action({params}){
    await verDetalleBalance(params.id_balance) 
    return redirect('/finanzas')
}

function BalanceGeneral() {

const { balance } = useLoaderData();
const location = useLocation()

return (
    <>
        <h1 className="font-black text-4xl ">Balance general</h1>
        <p>Vista del Balance General</p>

        <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
            {balance.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="p-2">id</th>
                            <th className="p-2">fecha</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {balance.map(balance => (
                            <Balance
                                balance={balance}
                                key={balance.id_balance}
                            />
                        ))}
                    </tbody>

                </table>
            ) : (
                <p className="text-center mt-10"> No existe balances</p>
            )}
        </div>
        <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
            <Link 
                state={location.state}
                to="/finanzas/balance/nuevo">CREAR BALANCE</Link>  {/*/balance/nuevo */}

        </button>
    </>
);
}

export default BalanceGeneral;