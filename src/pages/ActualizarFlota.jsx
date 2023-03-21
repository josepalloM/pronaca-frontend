import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioActualizarFlota from "../components/FormularioActualizarFlota";
import Error from "../components/Error";
import {obtenerUbicaciones} from "../data/ubicaciones";
import { obtenerFlota, actualizarFlota } from "../data/flotas"
import { obtenerTransporte } from "../data/transporte";

export async function loader({params}){
    const flota = await obtenerFlota(params.flotaId)
    console.log(flota)
    const ubicaciones = await obtenerUbicaciones()
    const transporte = await obtenerTransporte(flota.ID_TRANSPORTE)
    //console.log("Ubicaciones", ubicaciones)
    return {flota, ubicaciones, transporte}
}


export  async function action({request, params}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const transporteId = formData.get('ID_TRANSPORTE')
    // const apellido = formData.get('apellido_flota')
    // const cedula = formData.get('ruc_cedula')
    // const email = formData.get('email_flota')
    // const telefono = formData.get('telefono_flota')
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }

    // let regex = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    // if(!regex.test(nombre)){
    //     errores.push("El nombre solo debe contener letras");
    // }

    // let regex1 = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    // if(!regex1.test(apellido)){
    //     errores.push("El apellido solo debe contener letras");
    // }

    // let regex2 = new RegExp("^[0-9]{10}$");
    // if(!regex2.test(cedula)){
    //     errores.push("La cédula solo debe contener 10 números");
    // }

    // let regex3 = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    // if(!regex3.test(email)){
    //     errores.push("El email debe ser de la siguiente forma alguien@ejemplo.algo");
    // }

    // let regex5 = new RegExp("(^[0-9]{10}$)|(^[0-9]{9}$)");
    // if(!regex5.test(telefono)){
    //     errores.push("El teléfono solo debe contener 9 o 10 números");
    // }

    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
    await actualizarFlota(params.flotaId, datos)
  
    return redirect(`/flota/${transporteId}`)
}

function ActualizarFlota() {

    const {flota, ubicaciones, transporte} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nueva Flota</h1>
            <p className="mt-3">Llena todos los campos para agregar una nueva flota</p>

            <div className="flex flex-col items-center m-2 font-black text-4xl ">{transporte.NOMBRE_TRANSPORTE}</div>
            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Flota</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
               
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"


                >
                    <FormularioActualizarFlota 
                        flota={flota}
                        ubicaciones={ubicaciones}
                        transporte={transporte}
                    />

                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Registrar Flota"
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

export default ActualizarFlota