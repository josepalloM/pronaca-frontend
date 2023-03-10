import { verDetalleBalance } from "../data/balance.js";
import Error from "../components/Error.jsx";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import VerDetalleBalanceRegistro from '../components/VerDetalleBalanceRegistro.jsx' 

export async function loader({params}){
    const balance =  await verDetalleBalance(params.balanceId)
    
    if (Object.values(balance).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El balance no fue encontrado'
        })
    }
    return balance
}





function VerDetalleBalance() {

    const navigate = useNavigate()
    const balance = useLoaderData()
    const errores = useActionData()

    return (
        <>
        

            
        <h1 className="font-black text-4xl text-black">Ver detalle Balance</h1>
            <p className="mt-3">A continuación podrás ver el detalle de un balance</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Informes de Balances</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                   
                    //

                >
                    <VerDetalleBalanceRegistro
                        balance={balance}  
                    />

                    <div className="grid grid-cols-2 gap-2">
                      
                        <div>
                            <button
                                type="button"
                                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                onClick={() => navigate(-1)}
                            >Volver</button>
                        </div>
                        
                    </div>
                    
                    
                </Form>
            </div>






        </>
    );
}

export default VerDetalleBalance;