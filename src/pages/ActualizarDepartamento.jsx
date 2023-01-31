import { obtenerDepartamento, actualizarDepartamento } from "../data/departamentos.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioActualizarDepartamento from "../components/FormularioActualizarDepartamento.jsx";


export async function loader({params}){
    const departamento =  await obtenerDepartamento(params.departamentoId)
    
    
    if (Object.values(departamento).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El departamento no fue encontrado'
        })
    }
    console.log("Departamento en actualizar", departamento)
    return { departamento }
}

export async function action({request, params}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)

    //Validacion
    const errores = []
    if (Object.values(datos).includes('')){
        errores.push('Todos los campos sosn necesarios')
    }

    //Retornar datos si ha errores
    if (Object.keys(errores).length){
        return errores
    }

    // Actualizar Departamento
    await  actualizarDepartamento(params.departamentoId, datos)
    return redirect('/empleados/departamentos')
}

function ActualizarDepartamento() {

    const navigate = useNavigate()
    const { departamento } = useLoaderData()
    const errores = useActionData()
    

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Departamento</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un departamento</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Departamento</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="PUT"
                    //

                >
                    <FormularioActualizarDepartamento
                        departamento={departamento}  
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Guardar cambios"
                                
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
    );
}

export default ActualizarDepartamento;