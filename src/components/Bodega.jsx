import {Form, redirect, useNavigate} from "react-router-dom";
import {eliminarBodega} from "../data/bodegas";

export async function action({params}){
    await eliminarBodega(params.bodegaId)
    return redirect('/opciones/bodega')
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
            <td className="py-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/bodegas/${ID_BODEGA}/editar`)}
                >Ver Productos de la Bodega</button>

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

export default Bodega