import {Form, useNavigate, redirect} from "react-router-dom";
import {eliminarProveedor} from "../data/proveedores";

export async function action({params}){
    await eliminarProveedor(params.proveedorId)
    return redirect('/proveedoresOpciones/proveedores')
}

function Proveedor({ proveedor }) {
    const navigate = useNavigate()
    const {
        NOMBRE_PROVEEDOR,
        RUC,
        TIPO_PROVEEDOR,
        ID_PROVEEDOR

    } = proveedor

    return (
  
            <tr className="border-b">
                <td className="">
                    {NOMBRE_PROVEEDOR}
                </td>
                <td>
                    {TIPO_PROVEEDOR}
                </td>
                <td>
                    {RUC}
                </td>

                <td className="p-4 flex justify-center gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/proveedoresOpciones/proveedor/${ID_PROVEEDOR}/editar`)}
                    >Editar</button>

                    <Form
                        method='post'
                        action={`/proveedoresOpciones/proveedor/${ID_PROVEEDOR}/eliminar`}
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

export default Proveedor