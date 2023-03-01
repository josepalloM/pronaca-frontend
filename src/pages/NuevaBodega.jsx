import {agregarBodega} from "../data/bodegas.js";
import {Form, redirect, useActionData, useNavigate} from "react-router-dom";
import Error from "../components/Error.jsx";
import FormularioBodega from "../components/FormularioBodega.jsx";

export async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    if(Object.keys(errores).length){
        return errores
    }

    await agregarBodega(datos)
    return redirect('/opciones/bodega')
}

function NuevaBodega(props){
    const errores = useActionData()
    const navigate = useNavigate()

    return(
        <>
            <h1 className="font-black text-4xl text-black">Nueva Bodega</h1>
            <p className="mt-3">Llené todos los campos para agregar una nueva preventa</p>
            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Preventa</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method="POST">
                    <FormularioBodega />
                    <div className="grid grid-cols-2 gap-2 text-center">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Registrar Bodega"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                onClick={() => navigate(-1)}
                            >Cancelar</button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default NuevaBodega;