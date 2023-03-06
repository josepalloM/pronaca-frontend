import {agregarCliente, obtenerCliente, actualizarCliente} from "../data/clientes.js";
import Error from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import FormularioCliente from "../components/FormularioCliente.jsx";
import {obtenerUbicaciones} from "../data/ubicaciones";

export async function loader({params}){
    const cliente =  await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length===0){
        throw new Response('', {
            status: 404,
            statusText: 'El cliente no fue encontrado'
        })
    }

    const ubicaciones =  await obtenerUbicaciones()
    //console.log("Ubicaciones", ubicaciones)

    
    //return {cliente, ubicacion}
    console.log(cliente)
    return {cliente, ubicaciones}
}

export async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const nombre = formData.get('nombre_cliente')
    const apellido = formData.get('apellido_cliente')
    const cedula = formData.get('ruc_cedula')
    const email = formData.get('email_cliente')
    const telefono = formData.get('telefono_cliente')
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    if(!regex.test(nombre)){
        errores.push("El nombre solo debe contener letras");
    }

    let regex1 = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    if(!regex1.test(apellido)){
        errores.push("El apellido solo debe contener letras");
    }

    let regex2 = new RegExp("^[0-9]{10}$");
    if(!regex2.test(cedula)){
        errores.push("La cédula solo debe contener 10 números");
    }

    let regex3 = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    if(!regex3.test(email)){
        errores.push("El email debe ser de la siguiente forma alguien@ejemplo.algo");
    }

    //let regex4 = new RegExp("^[^@]+@[^@]+\\.[a-zA-Z]{2,}$");
    //if(!regex4.test(estado)){
    //    errores.push("El estado solo debe ser ");
    //}

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

    // Actualizar Cliente
    await actualizarCliente(params.clienteId, datos)
    //await obtenerUbicacion(params.ubicacionId)
    return redirect('/clientes')
}

function ActualizarCliente() {

    const navigate = useNavigate()
    const {cliente, ubicaciones} = useLoaderData()
    //const ubicacion = useLoaderData()
    //const ubicaciones={}
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar Cliente</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">CLiente</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="PUT"
                    

                >
                    <FormularioCliente 
                        cliente={cliente}
                        ubicaciones={ubicaciones}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Editar Cliente"
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

export default ActualizarCliente;