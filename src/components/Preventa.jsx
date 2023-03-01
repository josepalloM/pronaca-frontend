import {Form, redirect} from "react-router-dom";
import { eliminarPreventa } from "../data/preventa";

export async function action({params}){
    await eliminarPreventa(params.preventaId)
    return redirect('/opciones/preventa')
}

function Preventa({preventa}) {
    const {
        ID_PREVENTA,
        ID_EMPLEADO,
        ID_CLIENTE_POTENCIAL,
        FECHA_VISITA_PREVENTA,
        DESCRIPCION_PREVENTA
        
    } = preventa

    return (

        <tr className="border-b">
            <td className="">
                {ID_CLIENTE_POTENCIAL}
            </td>
            <td>
                {ID_EMPLEADO}
            </td>
            <td>
                {FECHA_VISITA_PREVENTA}
            </td>
            <td>
                {DESCRIPCION_PREVENTA}
            </td>
            <td className="p-4 flex justify-center gap-3">

                <Form
                    method='post'
                    action={`/preventas/${ID_PREVENTA}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este registro?')) {
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

export default Preventa


