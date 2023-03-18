import {agregarProveedor, obtenerProveedor, actualizarProveedor} from "../data/proveedores";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioProveedor from "../components/FormularioProveedor";
// import {obtenerUbicaciones} from "../data/ubicaciones";

export async function loader({params}){
    const proveedor =  await obtenerProveedor(params.proveedorId)
    if (Object.values(proveedor).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El proveedor no fue encontrado'
        })
    }

    // const ubicaciones =  await obtenerUbicaciones()

    // console.log(cliente)
    return {proveedor}
}

export async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const nombre = formData.get('nombre_proveedor')
    const tipo = formData.get('tipo_proveedor')
    const ruc = formData.get('ruc')
    // const email = formData.get('email_cliente')
    // const telefono = formData.get('telefono_cliente')
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    if(!regex.test(nombre)){
        errores.push("El nombre solo debe contener letras");
    }

    let regex2 = new RegExp("^[0-9]{13}$");
    if(!regex2.test(ruc)){
        errores.push("La cédula solo debe contener 10 números seguidos de 001");
    }

    let regex5 = new RegExp("(^[0-9]{10}$)|(^[0-9]{9}$)");
    if(!regex5.test(telefono)){
        errores.push("El teléfono solo debe contener 9 o 10 números");
    }

    //Validacion
    if (Object.values(datos).includes('')){
        errores.push('Todos los campos sosn necesarios')
    }

    //Retornar datos si ha errores
    if (Object.keys(errores).length){
        return errores
    }

    // Actualizar Proveedor
    await actualizarProveedor(params.proveedorId, datos)
    //await obtenerUbicacion(params.ubicacionId)
    return redirect('/proveedoresOpciones/proveedores')
}

function ActualizarProveedor() {

    const navigate = useNavigate()
    const {proveedor} = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar proveedor</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un proveedor</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Proveedor</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="PUT"
                >
                    <FormularioProveedor 
                        proveedor={proveedor}
                        // ubicaciones={ubicaciones}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Editar proveedor"
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

export default ActualizarProveedor;