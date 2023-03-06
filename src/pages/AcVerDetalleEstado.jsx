import { verDetalleEstado } from "../data/estado.js";
import Error from "../components/Error.jsx";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import VerDetalleEstadoRegistro from '../components/VerDetalleEstadoRegistro.jsx' 
import { obtenerParametro } from "../data/parametros_iess"

export async function loader({params}){
    const estado =  await verDetalleEstado(params.estadoId)
    const parametro = await obtenerParametro(3)
    if (Object.values(estado).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El estado no fue encontrado'
        })
    }
    return {estado,parametro}
}





function VerDetalleEstado() {

    const navigate = useNavigate()
    const {estado,parametro} = useLoaderData()
    const errores = useActionData()

    return (
        <>



        <h1 className="font-black text-4xl text-black">Ver detalle Estado de Resultados</h1>
            <p className="mt-3">A continuación podrás ver el detalle de un estado de resultados</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Informes de Estados</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">


                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form

                    //

                >
                    <VerDetalleEstadoRegistro
                        estado={estado}  
                        parametro_isr = {parametro}
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

export default VerDetalleEstado;