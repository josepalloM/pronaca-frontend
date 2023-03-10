import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Balance({ balance }) {
    const { id_balance, activos, pasivos, patrimonio, fecha ,bancos,inventario, cuentas_por_cobrar_cli,iva_compras, cuenta_pagar_proveedor, iva_ventas, aportes, nomina, pasivos_fijos} = balance

   
    
const navigate = useNavigate()


return (
    <tr className="border-b">
        <td className="text-center">
            {id_balance}
        </td>
        <td className="text-center">{new Date(fecha).toLocaleDateString()}</td>
        <td className="text-center">
            <div className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-green-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/finanzas/balance/${id_balance}/detalle`)}  //``/finanzas/asientos/${ID_ASIENTO}/detalle`
                >
                    Ver Detalle
                </button>
            </div>
        </td>
    </tr>
);

}

export default Balance