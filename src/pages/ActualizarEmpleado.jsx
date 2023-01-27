import {agregarEmpleado, obtenerEmpleado, actualizarEmpleado} from "../data/empleados.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioEmpleado from "../components/FormularioEmpleado.jsx";

export async function loader({params}){
    const empleado =  await obtenerEmpleado(params.empleadoId)
    if (Object.values(empleado).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El empleado no fue encontrado'
        })
    }
    console.log("Empleado en actualizar", empleado)
    return empleado
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

    // Actualizar Empleado
    await  actualizarEmpleado(params.empleadoId, datos)
    return redirect('/empleados')
}

function ActualizarEmpleado() {

    const navigate = useNavigate()
    const empleado = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Empleado</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un empleado</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Empleado</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"
                    

                >
                    <FormularioEmpleado 
                        empleado={empleado}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Editar Empleado"
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

export default ActualizarEmpleado;