import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Balance({ balance }) {
const { ID_INFORME_FINANCIERO, ACTIVOS, PASIVOS, PATRIMONIO,FECHA } = balance

const navigate = useNavigate()


return (
    <tr className="border-b">
        <td className="text-center">
            {ID_INFORME_FINANCIERO}
        </td>
        <td className="text-center">{new Date(FECHA).toLocaleDateString()}</td>
        <td className="text-center">
            <div className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-green-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`#`)}
                >
                    Ver Detalle
                </button>
            </div>
        </td>
    </tr>
);

}

export default Balance