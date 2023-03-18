import { obtenerTransporte, actualizarTransporte } from "../data/transporte";
import Error from "../components/Error.jsx";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import FormularioTransporte from "../components/FormularioTransporte";
// import {obtenerUbicaciones} from "../data/ubicaciones";

export async function loader({ params }) {
    const transporte = await obtenerTransporte(params.transporteId)
    if (Object.values(transporte).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El transporte no fue encontrado'
        })
    }

    // const ubicaciones =  await obtenerUbicaciones()

    // console.log(cliente)
    return { transporte }
}

export async function action({ request, params }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const nombre = formData.get('nombre_transporte')
    const ruc = formData.get('ruc_transporte')
    const telefono = formData.get('telefono_transporte')
    const direccion = formData.get('direccion_transporte')

    //validaciones
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("(^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$)");
    if (!regex.test(nombre)) {
        errores.push("El nombre solo debe contener letras");
    }

    let regex2 = new RegExp("^[0-9]{13}$");
    if (!regex2.test(ruc)) {
        errores.push("La cédula solo debe contener 10 números seguidos de 001");
    }

    // let regex3 = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
    // if(!regex3.test(email)){
    //     errores.push("El email debe ser de la siguiente forma alguien@ejemplo.algo");
    // }

    let regex5 = new RegExp("(^[0-9]{10}$)|(^[0-9]{9}$)");
    if (!regex5.test(telefono)) {
        errores.push("El teléfono solo debe contener 9 o 10 números");
    }


    //Retornar datos si hay erroes
    if (Object.keys(errores).length) {
        return errores
    }
    console.log(datos)
    await actualizarTransporte(params.transporteId, datos)

    console.log(datos)
    return redirect('/transporte')
}

function ActualizarTransporte() {

    const navigate = useNavigate()
    const { transporte } = useLoaderData()
    const errores = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-black">Editar transporte</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un transporte</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Transporte</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">


                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="PUT"
                >
                    <FormularioTransporte
                        transporte={transporte}
                    // ubicaciones={ubicaciones}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input
                                type="submit"
                                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                                value="Editar transporte"
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

export default ActualizarTransporte;