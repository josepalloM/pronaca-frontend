import Select from "react-select";
import React from "react";

const FormularioBodega = () => {
    return(
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="NOMBRE"
                >Nombre:</label>
                <input
                    id="NOMBRE"
                    name="NOMBRE"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Nombre de la bodega"
                />
            </div>
            <div>
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="SECTOR_UBICACION"
                >Sector de la bodega:</label>
                <input
                    id="SECTOR_UBICACION"
                    name="SECTOR_UBICACION"
                    type="text"
                    className="block w-full p-3 bg-gray-50"
                    placeholder="Sector de la bodega"
                />
            </div>
        </div>
    );
}

export default FormularioBodega;