import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormularioCliente from "../components/FormularioCliente";
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

export  async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
  
    //validaciones
    const errores = []
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
  
    //Retornar datos si hay erroes
    if(Object.keys(errores).length){
      return errores
    }
  
    await agregarCliente(datos)
  
    console.log(datos)
    return redirect('/clientes')
}

function NuevoCliente() {
    
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
                    <FormularioCliente />

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