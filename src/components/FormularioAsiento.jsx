import {useState,useRef} from "react"

const FormularioAsiento = ({cuentas}) => {
    var idCuentasPadres = [];
    var cuentaAsientos = [];
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    cuentaAsientos = cuentas.filter(cuenta => (idCuentasPadres.includes(cuenta.ID_CUENTA) == true)) 
    
    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <>
            <div className="my-4">
                <p>Fecha Seleccionada: {date}</p>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                    id="FECHA_ASIENTO"
                    name="FECHA_ASIENTO"
                />
            </div>            
            
            <div className="mb-4">
                <label
                    className=" flex justify-start text-gray-800"
                    htmlFor="descripcion_asiento"
                >Cuenta:</label>
                <input
                    type="text"
                    id="descripcion_asiento"
                    name="descripcion_asiento"
                    className="mt-2 block w-full p-3 bg-gray-50 border-2 border-black"
                />
            </div> 
        </>
    )
}

export default FormularioAsiento