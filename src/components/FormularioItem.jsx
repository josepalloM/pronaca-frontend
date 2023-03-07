
import { useState } from 'react';




const FormularioItem = ({ item, tipo_items, listaitems,estadosproduccion, bodegas,pasoreceta }) => {

    const [tipo_item, settipo_item] = useState('');
    const [lista_item, setlista_item] = useState('');
    const [estado_produc, setestado_produc] =useState('');
    const [bodega, setbodega] = useState('');
    const [p_receta,setp_receta] = useState('');
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
                        ) : (<p> No existe estados de produccion</p>)}
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="tipo_item"
                    >Tipo Item:</label>
                    <div className="">
                        {tipo_items.length ? (
                            <select id="tipo_item" value={p_receta} name="id_tipo_item" onChange={(event) => setp_receta(event.target.value)} className="form-control border-2 border-black">
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
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_bodega"
                    >Bodega:</label>
                    <div className="">
                        {bodegas.length ? (
                            <select id="id_bodega" value={bodega} name="id_bodega" onChange={(event) => setbodega(event.target.value)} className="form-control border-2 border-black">
                                <option >Selecciona la bodega</option>
                                {bodegas.map(bodegas => (
                                    <option key={bodegas.ID_BODEGA} value={bodegas.ID_BODEGA}>{bodegas.NOMBRE}</option>
                                ))}
                            </select>
                        ) : (<p> No existe bodegas</p>)}
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className=" flex justify-start text-gray-800"
                        htmlFor="id_paso_receta"
                    >Paso Receta:</label>
                    <div className="">
                        {pasoreceta.length ? (
                            <select id="id_paso_receta" value={bodega} name="id_paso_receta" onChange={(event) => setbodega(event.target.value)} className="form-control border-2 border-black">
                                <option >Selecciona el paso de la receta</option>
                                {pasoreceta.map(paso_receta => (
                                    <option key={paso_receta.ID_PASO_RECETA} value={paso_receta.ID_PASO_RECETA}>{paso_receta.NOMBRE_PASO_RECETA}</option>
                                ))}
                            </select>
                        ) : (<p> No existe receta</p>)}
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default FormularioItem