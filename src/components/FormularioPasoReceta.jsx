const FormularioPasoReceta = ({ pasoreceta_produccion }) => {
    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_receta_produccion"
                    >Receta: </label>
                    <input
                        id="id_receta_produccion"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="id receta produccion"
                        name="id_receta_produccion"
                        defaultValue={pasoreceta_produccion?.ID_PASO_RECETA}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="nombre_paso_receta"
                    >Nombre: </label>
                    <input
                        id="nombre_paso_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="nombre del Paso de la Receta"
                        name="nombre_paso_receta"
                        defaultValue={pasoreceta_produccion?.NOMBRE_PASO_RECETA}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="descripcion_paso_receta"
                    >Descripcion: </label>
                    <input
                        id="descripcion_paso_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Descripcion de la receta"
                        name="descripcion_paso_receta"
                        defaultValue={pasoreceta_produccion?.DESCRIPCION_PASO_RECETA}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="categoria_paso_receta"
                    >Categoria: </label>
                    <input
                        id="categoria_paso_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Categoria de la receta"
                        name="categoria_paso_receta"
                        defaultValue={pasoreceta_produccion?.CATEGORIA_PASO_RECETA}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="tiempo_produc_receta"
                    >Tiempo: </label>
                    <input
                        id="tiempo_produc_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejemplo 10:00"
                        name="tiempo_produc_receta"
                        defaultValue={pasoreceta_produccion?.TIEMPO_PRODUC_RECETA}
                    />
                </div>
            </div>
        </>

    )
}

export default FormularioPasoReceta