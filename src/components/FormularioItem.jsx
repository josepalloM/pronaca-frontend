
import { useState } from 'react';

const FormularioItem = ({ item, tipo_items }) => {

    const [tipo_item, settipo_item] = useState('');
    console.log(tipo_items);
    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_lista_items"
                    >Id Lista Item: </label>
                    <input
                        id="id_lista_items"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Id Lista Item"
                        name="id_lista_items"
                        defaultValue={item?.ID_LISTA_ITEMS}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_estado_producion"
                    >Id Estado Produccion: </label>
                    <input
                        id="id_estado_producion"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Estado de Produccion"
                        name="id_estado_producion"
                        defaultValue={item?.ID_ESTADO_PRODUCION}
                    />

                </div>
                {/*<div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_tipo_item"
                    >Id Tipo Item: </label>
                    <input
                        id="id_tipo_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Tipo Item"
                        name="id_tipo_item"
                        defaultValue={item?.ID_TIPO_ITEM}
                    />

                </div>*/}
                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="tipo_item"
                    >Tipo Item:</label>
                    <div className="">
                        {tipo_items.length ? (
                            <select id="tipo_item" value={tipo_item} name="id_tipo_item" onChange={(event) => settipo_item(event.target.value)} className="form-control border-2 border-black">
                                <option >Selecciona el Tipo de Item</option>
                                {tipo_items.map(tipo_item => (
                                    <option key={tipo_item.ID_TIPO_ITEM} value={tipo_item.ID_TIPO_ITEM}>{tipo_item.TIPO_ITEM}</option>
                                ))}
                            </select>
                        ) : (<p> No existe Tipos de Item</p>)}
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="codigo_item"
                    >Codigo Item: </label>
                    <input
                        id="codigo_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Codigo Produccion"
                        name="codigo_item"
                        defaultValue={item?.CODIGO_ITEM}
                    />

                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="nombre_item"
                    >Nombre Item: </label>
                    <input
                        id="nombre_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre Item"
                        name="nombre_item"
                        defaultValue={item?.NOMBRE_ITEM}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="id_bodega"
                    >Bodega: </label>
                    <input
                        id="id_bodega"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="bodega"
                        name="id_bodega"
                        defaultValue={item?.ID_BODEGA}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="paso_receta"
                    >Paso Receta: </label>
                    <input
                        id="paso_receta"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Paso Receta"
                        name="id_paso_receta" 
                        />
                </div>
                {/*<div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha1_cadu_item"
                    >Fecha Caducidad 1 : </label>
                    <input
                        id="fecha1_cadu_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejmplo: aaaa-mm-dd"
                        name="fecha1_cadu_item" 
                        defaultValue = {item?.FECHA1_CADU_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="fecha2_cadu_item"
                    >Fecha Caducidad 2: </label>
                    <input
                        id="fecha2_cadu_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Ejmplo: aaaa-mm-dd"
                        name="fecha2_cadu_item" 
                        defaultValue = {item?.FECHA2_CADU_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="lote_item"
                    >Lote Item: </label>
                    <input
                        id="lote_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Lote de Item"
                        name="lote_item" 
                        defaultValue = {item?.LOTE_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="cantidad_lote_item"
                    >Cantidad de Lote: </label>
                    <input
                        id="cantidad_lote_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Cantidad Lote de Item"
                        name="cantidad_lote_item" 
                        defaultValue = {item?.CANTIDAD_LOTE_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="precio_item"
                    >Precio Item: </label>
                    <input
                        id="precio_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Precio Item"
                        name="precio_item" 
                        defaultValue = {item?.PRECIO_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="peso_item"
                    >Peso Item: </label>
                    <input
                        id="peso_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Peso de Item"
                        name="peso_item" 
                        defaultValue = {item?.PESO_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="conservacion_item"
                    >Conservación Item: </label>
                    <input
                        id="conservacion_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Conservación Item"
                        name="conservacion_item" 
                        defaultValue = {item?.CONSERVACION_ITEM}
                        />
                </div>

                <div className="mb-4">
                    <label
                        className="flex justify-start text-gray-800"
                        htmlFor="detalle_item"
                    >Detalle Item: </label>
                    <input
                        id="detalle_item"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Detalle Item"
                        name="detalle_item" 
                        defaultValue = {item?.DETALLE_ITEM}
                        />
                </div>*/}
            </div>
        </>

    )
}

export default FormularioItem