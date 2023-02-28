import {Form, redirect, useNavigate} from "react-router-dom";

export async function action({params}){
    return redirect('/opciones/bodegas')
}

function Bodega({bodega}){
    const navigate = useNavigate()
    const {
        NOMBRE,
        SECTOR_UBICACION,
        ID_BODEGA
    } = bodega

    return (
        <tr className="border-b">
            <td className="">
                {ID_BODEGA}
            </td>
            <td>
                {NOMBRE}
            </td>
            <td>
                {SECTOR_UBICACION}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <Form
                    method='post'
                    action={`/bodegas/${ID_BODEGA}/eliminar`}
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