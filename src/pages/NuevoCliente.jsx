import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioCliente from "../components/FormularioCliente";
import Error from "../components/Error";
import {obtenerUbicaciones} from "../data/ubicaciones";
import {agregarCliente} from "../data/clientes"

export async function loader(){
    const ubicaciones =  await obtenerUbicaciones()
    //console.log("Ubicaciones", ubicaciones)
    return ubicaciones
}


export  async function action({request}){
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

    let regex5 = new RegExp("(^[0-9]{10}$)|(^[0-9]{9}$)");
    if(!regex5.test(telefono)){
        errores.push("El teléfono solo debe contener 9 o 10 números");
    }

    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
    console.log(datos)
    await agregarCliente(datos)
  
    console.log(datos)
    return redirect('/clientes')
}

function NuevoCliente() {

    const ubicaciones = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo cliente</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Ciente</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
               
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"


                >
                    <FormularioCliente 
                        ubicaciones={ubicaciones}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Registrar Cliente"
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

export default NuevoCliente