
const FormularioListaItem = ({listaItem}) => {
    return(
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_empleado"
                    >Id Empleado: </label>
                    <input
                        id="id_empleado"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Empleado"
                        name="id_empleado"
                        defaultValue = {listaItem?.ID_EMPLEADO}
                        />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_cuenta"
                    >Id cuenta: </label>
                    <input
                        id="id_cuenta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Cuenta"
                        name="id_cuenta" 
                        defaultValue = {listaItem?.ID_CUENTA}
                        />
                        
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_tipo_lista_product"
                    >Id Tipo Lista procucto: </label>
                    <input
                        id="id_tipo_lista_product"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Tipo Lista procucto"
                        name="id_tipo_lista_product" 
                        defaultValue = {listaItem?.ID_TIPO_LISTA_PRODUC}
                        />
                        
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_lista"
                    >Detalle Lista: </label>
                    <input
                        id="detalle_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Detalle Lista"
                        name="detalle_lista" 
                        defaultValue = {listaItem?.DETALLE_LISTA}
                        />
                        
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha_lista"
                    >Fecha Lista: </label>
                    <input
                        id="fecha_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejmplo: aaaa-mm-dd"
                        name="fecha_lista" 
                        defaultValue={listaItem?.FECHA_LISTA}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="estado_lista"
                    >Estado Lista: </label>
                    <input
                        id="estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Estado Lista"
                        name="estado_lista" 
                        defaultValue = {listaItem?.ESTADO_LISTA}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_estado_lista"
                    >Destalle Estado Lista: </label>
                    <input
                        id="detalle_estado_lista"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Destalle Estado Lista"
                        name="detalle_estado_lista" 
                        defaultValue = {listaItem?.DETALLE_ESTADO_LISTA}
                        />
                </div>
            </div>
        </>

    )
}

export default FormularioListaItem