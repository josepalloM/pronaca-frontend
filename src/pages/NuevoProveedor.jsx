import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import FormularioProveedor from "../components/FormularioProveedor";
import Error from "../components/Error";
import {agregarProveedor} from "../data/proveedores"

// export async function loader(){
//     const ubicaciones =  await obtenerUbicaciones()
//     //console.log("Ubicaciones", ubicaciones)
//     return ubicaciones
// }


export  async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const nombre = formData.get('nombre_proveedor')
    const tipo = formData.get('tipo_proveedor')
    const ruc = formData.get('ruc')
    const telefono = formData.get('telefono_proveedor')

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

    // let regex3 = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    // if(!regex3.test(email)){
    //     errores.push("El email debe ser de la siguiente forma alguien@ejemplo.algo");
    // }

    let regex5 = new RegExp("(^[0-9]{10}$)|(^[0-9]{9}$)");
    if(!regex5.test(telefono)){
        errores.push("El teléfono solo debe contener 9 o 10 números");
    }

    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
    console.log(datos)
    await agregarProveedor(datos)
  
    console.log(datos)
    return redirect('/proveedoresOpciones/proveedores')
}

function NuevoProveedor() {

    // const ubicaciones = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Nuevo proveedor</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo proveedor</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Proveedor</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                
                
               
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="POST"


                >
                    <FormularioProveedor 
                        // ubicaciones={ubicaciones}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Registrar proveedor"
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

export default NuevoProveedor