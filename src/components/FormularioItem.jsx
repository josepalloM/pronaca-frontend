
import { useState } from 'react';

const FormularioItem = ({ item, tipo_items, listaitems, estadosproduccion }) => {

    const [tipo_item, settipo_item] = useState('');
    const [lista_item, setlista_item] = useState('');
    const [estado_produc, setestado_produc] =useState('');
    //console.log(tipo_items);
    console.log(listaitems);
    return (
        <>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_lista_items"
                    >Id Lista Items:</label>
                    <div className="">
                        {listaitems.length ? (
                            <select id="id_lista_items" value={lista_item} name="id_lista_items" onChange={(event) => setlista_item(event.target.value)} className="form-control border-2 border-black">
                                <option >Selecciona Lista</option>
                                {listaitems.map(lista_item => (
                                    <option key={lista_item.ID_LISTA_ITEMS} value={lista_item.ID_LISTA_ITEMS}>{lista_item.DETALLE_LISTA}</option>
                                ))}
                            </select>
                        ) : (<p> No existe Id Lista Item</p>)}
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_estado_producion"
                    >Estado Produccion:</label>
                    <div className="">
                        {estadosproduccion.length ? (
                            <select id="id_estado_producion" value={estado_produc} name="id_estado_producion" onChange={(event) => setestado_produc(event.target.value)} className="form-control border-2 border-black">
                                <option >Selecciona el estado</option>
                                {estadosproduccion.map(estadoproduccion => (
                                    <option key={estadoproduccion.ID_ESTADO_PRODUCCION} value={estadoproduccion.ID_ESTADO_PRODUCCION}>{estadoproduccion.ESTADO_PRODUCCION}</option>
                                ))}
                            </select>
                        ) : (<p> No existe Id Lista Item</p>)}
                    </div>
                </div>
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