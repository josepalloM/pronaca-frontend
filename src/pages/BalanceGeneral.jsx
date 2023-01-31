import { useLoaderData } from "react-router-dom";
import { obtenerBalance } from "../data/balance";
import Balance from "../components/Balance";

export async function loader() {
    const balance = await obtenerBalance()

    return { balance }
}

function BalanceGeneral() {

    const { balance } = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl ">Balance general</h1>
            <p>Vista del Balance General</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {balance.length ? (
                    <table>
                        <thead>
                            <tr className="border-b">
                                <th>Activos</th>
                                <th>Pasivos</th>
                                <th>Patrimonio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {balance.map(balance => (
                                <Balance
                                    balance={balance}
                                />

                            ))}
                        </tbody>
                    </table>
                ) : (<p> No existe balance</p>)}

            </div>







        </>
    )
}

export default BalanceGeneral