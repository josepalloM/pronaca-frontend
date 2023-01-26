import {Form, useNavigate, redirect} from "react-router-dom";
import {eliminarCliente} from "../data/clientes.js";

export async function action({params}){
    await eliminarCliente(params.clienteId)
    return redirect('/clientes')
}

function Cliente({ cliente }) {
    const navigate = useNavigate()
    const {
        NOMBRE_CLIENTE_POTENCIAL,
        APELLIDO_CLIENTE_POTENCIAL,
        DIRECCION_CLIENTE_POTENCIAL,
        TELEFONO_CLIENTE_POTENCIAL,
        RUC_CEDULA_CLIENTEPOTENCIAL,
        ID_CLIENTE_POTENCIAL,
    } = cliente

    return (
  
            <tr className="border-b">
                <td className="">
                    {NOMBRE_CLIENTE_POTENCIAL}
                </td >
                <td>
                    {APELLIDO_CLIENTE_POTENCIAL}
                </td>
                <td>
                    {DIRECCION_CLIENTE_POTENCIAL}
                </td>
                <td>
                    {TELEFONO_CLIENTE_POTENCIAL}
                </td>
                <td>
                    {RUC_CEDULA_CLIENTEPOTENCIAL}
                </td>
                <td className="p-4 flex justify-center gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/clientes/${ID_CLIENTE_POTENCIAL}/editar`)}
                    >Editar</button>

                    <Form
                        method='post'
                        action={`/clientes/${ID_CLIENTE_POTENCIAL}/eliminar`}
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