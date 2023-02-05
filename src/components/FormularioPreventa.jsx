import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";
const FormularioPreventa = ({clientes,empleados}) => {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const [cliente, setCliente] = useState("")
    const [empleado, setEmpleado] = useState("")
    var opcionesClientes = clientes.map(function(cl){
        var rObj = {};
        rObj["value"] = cl.ID_CLIENTE;
        rObj["label"] = cl.NOMBRE_CLIENTE + " " + cl.APELLIDO_CLIENTE;
        return rObj;
    });
    var opcionesEmpleados = empleados.map(function(cl){
        var rObj = {};
        rObj["value"] = cl.ID_EMPLEADO;
        rObj["label"] = cl.NOMBRE_EMPLEADO + " " + cl.APELLIDO_EMPLEADO;
        return rObj;
    });

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="my-4"> Seleccione un cliente
                {opcionesClientes.length?(
                    <Select options={opcionesClientes} id="ID_CLIENTE" name="ID_CLIENTE" />
                ):(<p> No existen clientes</p>)}
            </div>
            <div className="my-4"> Seleccione un empleado
                {opcionesEmpleados.length?(
                <Select options={opcionesEmpleados} id="ID_EMPLEADO" name="ID_EMPLEADO" />
                    ):(<p> No existen empleados</p>)}
            </div>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_VISITA_PREVENTA"
                    name="FECHA_VISITA_PREVENTA"
                />
            </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="DESCRIPCION_PREVENTA"
                >Descripción:</label>
                <input
                    id="DESCRIPCION_PREVENTA"
                    name="DESCRIPCION_PREVENTA"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Descripción de la preventa"
                />
            </div>
        </div>
    );
}

export default FormularioPreventa;