import {Form, useNavigate, redirect} from "react-router-dom";
import {eliminarCliente} from "../data/clientes.js";

export async function action({params}){
    await eliminarCliente(params.clienteId)
    return redirect('/clientes')
}

function Cliente({ cliente }) {
    const navigate = useNavigate()
    const {
        NOMBRE_CLIENTE,
        APELLIDO_CLIENTE,
        RUC_CEDULA,
        EMAIL_CLIENTE,
        ESTADO_CLIENTE,
        ZONA_UBICACION,
        SECTOR_UBICACION,
        NUMERO_UBICACION,
        TELEFONO_CLIENTE,
        ID_CLIENTE

    } = cliente

    return (
  
            <tr className="border-b">
                <td className="">
                    {NOMBRE_CLIENTE}
                </td>
                <td>
                    {APELLIDO_CLIENTE}
                </td>
                <td>
                    {RUC_CEDULA}
                </td>
                <td>
                    {EMAIL_CLIENTE}
                </td>
                <td>
                    {ESTADO_CLIENTE}
                </td>
                <td>
                    {ZONA_UBICACION}
                </td>
                <td>
                    {SECTOR_UBICACION}
                </td>
                <td>
                    {NUMERO_UBICACION}
                </td>
                <td>
                    {TELEFONO_CLIENTE}
                </td>

                <td className="p-4 flex justify-center gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/clientes/${ID_CLIENTE}/editar`)}
                    >Editar</button>

                    <Form
                        method='post'
                        action={`/clientes/${ID_CLIENTE}/eliminar`}
                        onSubmit={ (e) => {
                            if (!confirm('¿Deseas eliminar este registro?')){
                                e.preventDefault()
                            }
                        }}
                    >
                         <button
                        type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Eliminar</button>
                    </Form>
                   
                </td>
            </tr>


    )
}

export default Cliente