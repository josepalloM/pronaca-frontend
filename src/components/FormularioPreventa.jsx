import Select from "react-select";
import React, {useEffect, useRef, useState} from "react";
const FormularioPreventa = ({}) => {
    const [date, setDate] = useState('');
    const [clientes, setClientes] = useState()
    const [empleados, setEmpleados] = useState()
    const [loaded, setLoaded] = useState()
    const [loaded1, setLoaded1] = useState()
    const dateInputRef = useRef(null);
    useEffect(() => {
        fetch('http://localhost:4000/api/cliente')
            .then((res) => res.json())
            .then((cliente) => setClientes(cliente))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));
    }, []);
    useEffect(() => {
        fetch('http://localhost:4000/api/empleado/')
            .then((res) => res.json())
            .then((empleado) => setEmpleados(empleado))
            .catch((err) => console.log(err))
            .finally(() => setLoaded1(true));
    }, []);
    if(loaded && loaded1){
        var aux = clientes.map(function(cl){
            var rObj = {};
            rObj["value"] = cl.ID_CLIENTE_POTENCIAL;
            rObj["label"] = cl.NOMBRE_CLIENTE_POTENCIAL + " " + cl.APELLIDO_CLIENTE_POTENCIAL;
            return rObj;
        });
        var aux1 = empleados.map(function(cl){
            var rObj = {};
            rObj["value"] = cl.ID_EMPLEADO;
            rObj["label"] = cl.NOMBRE_EMPLEADO + " " + cl.APELLIDO_EMPLEADO;
            return rObj;
        });
    }

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="my-4"> Seleccione un cliente
                <Select options={aux} id="cliente_preventa" name="cliente_preventa"/>
            </div>
            <div className="my-4"> Seleccione un empleado
                <Select options={aux1} id="empleado_preventa" name="empleado_preventa"/>
            </div>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="fecha_preventa"
                    name="fecha_preventa"
                />
            </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="descripcion_preventa"
                >Descripción:</label>
                <input
                    id="descripcion_preventa"
                    name="descripcion_preventa"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Descripción de la preventa"
                    name="descripcion"
                    //defaultValue={cliente?.NOMBRE_CLIENTE_POTENCIAL}
                />
            </div>
        </div>
    );
}

export default FormularioPreventa;