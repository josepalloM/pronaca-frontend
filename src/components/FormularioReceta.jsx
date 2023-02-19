const FormularioReceta = ({ receta_produccion }) => {
    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="nombre_receta"
                    >Nombre: </label>
                    <input
                        id="nombre_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="nombre de la receta"
                        name="nombre_receta"
                        defaultValue={receta_produccion?.NOMBRE_RECETA}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_pedido_produccion"
                    >Detalle: </label>
                    <input
                        id="detalle_pedido_produccion"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Detalle de la receta"
                        name="detalle_pedido_produccion"
                        defaultValue={receta_produccion?.DETALLE_PEDIDO_PRODUCCION}
                    />
                </div>
                {/*<div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_item"
                    >Id Producto: </label>
                    <input
                        id="id_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Producto"
                        name="id_item"
                        defaultValue={receta_produccion?.ID_ITEM}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_pedido_materiap"
                    >Id Materia Prima: </label>
                    <input
                        id="id_pedido_materiap"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Materia Prima"
                        name="id_pedido_materiap"
                        defaultValue={receta_produccion?.ID_PEDIDO_MATERIAP}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="nombre_receta"
                    >Nombre: </label>
                    <input
                        id="detalle_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="nombre de la receta"
                        name="nombre_receta"
                        defaultValue={receta_produccion?.NOMBRE_RECETA}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="descripcion_receta"
                    >Descripción: </label>
                    <input
                        id="descripcion_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Descripcion de la receta"
                        name="descripcion_receta"
                        defaultValue={receta_produccion?.DESCRIPCION_RECETA}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="categoria_receta"
                    >Categoria: </label>
                    <input
                        id="categoria_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Categoria de la receta"
                        name="categoria_receta"
                        defaultValue={receta_produccion?.CATEGORIA_RECETA}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="tiempo_produc_receta"
                    >Tiempo de producción: </label>
                    <input
                        id="tiempo_produc_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejemplo 10:00"
                        name="tiempo_produc_receta"
                        defaultValue={receta_produccion?.TIEMPO_PRODUC_RECETA}
                    />
                </div>*/}
            </div>
        </>

    )
}

export default FormularioReceta