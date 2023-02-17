import { useNavigate } from "react-router-dom"
import { obtenerCuenta } from "../data/cuentas"
import { useState, useEffect } from "react"

function Item({ listaItem }) {

    const [cuenta, setCuenta] = useState();

    useEffect(() => {
        obtenerCuenta(listaItem.ID_CUENTA).then(cuenta => {
          setCuenta(cuenta[0].DESCRIPCION_CUENTA);
        });
      }, []);

    const navigate = useNavigate()
    const {ID_LISTA_ITEMS, ID_EMPLEADO, ID_CUENTA, ID_TIPO_LISTA_PRODUC, DETALLE_LISTA, FECHA_LISTA, ESTADO_LISTA, DETALLE_ESTADO_LISTA,} = listaItem

    return (
        <tr className="">
            <td>
                {ID_EMPLEADO}
            </td>
            <td>
                {cuenta}
            </td>
            <td>
                {ID_TIPO_LISTA_PRODUC}
            </td>
            <td>
                {DETALLE_LISTA}
            </td>
            <td>
                {FECHA_LISTA}
            </td>
            <td>
                {ESTADO_LISTA}
            </td>
            <td>
                {DETALLE_ESTADO_LISTA}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" 
                        onClick={() => navigate(`/item/${ID_LISTA_ITEMS}/actualizar`)}>Editar</button>
                <button type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Eliminar</button>
            </td>
        </tr>
    )
}

export default Item