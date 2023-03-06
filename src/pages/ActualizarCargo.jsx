import { obtenerCargo, actualizarCargo } from "../data/cargo_empleado";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioActualizarCargo from "../components/FormularioActualizarCargo.jsx";


export async function loader({params}){
    const cargo =  await obtenerCargo(params.cargoId)
    
    
    if (Object.values(cargo).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El cargo no fue encontrado'
        })
    }
    console.log("Cargo en actualizar", cargo)
    return { cargo }
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

    // Actualizar Cargo
    await  actualizarCargo(params.cargoId, datos)
    return redirect('/empleados/cargos')
}

function ActualizarCargos() {

    const navigate = useNavigate()
    const { cargo } = useLoaderData()
    const errores = useActionData()
    

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Cargo</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un cargo</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cargo</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="PUT"
                    //

                >
                    <FormularioActualizarCargo
                        cargo={cargo}  
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

export default ActualizarCargos;