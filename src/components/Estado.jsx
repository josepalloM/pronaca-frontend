import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Estado({ estado }) {
    const { id_estado,INGRESOS, COSTOS, GASTOS,fecha } = estado;
    const navigate = useNavigate()


    return (
        <tr className="border-b">

<td className="text-center">
            {id_estado}
        </td>

        <td className="text-center">{new Date(fecha).toLocaleDateString()}</td>
        <td className="text-center">

        <div className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-green-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/finanzas/estado/${id_estado}/detalle`)}  //finanzas/estado/${id_balance}/detalle
                >
                    Ver Detalle
                </button>
            </div>
            </td>
                    
        </tr>
    );
}

export default Estado;