
const FormularioItem = ({item}) => (
    <>
        <div className="">
            <label
                className=""
                htmlFor="id_cuenta"
            >Id Cuenta: </label>
            <input
                id="id_cuenta"
                type="text"
                className=""
                placeholder="Id de la cuenta"
                name="id_cuenta"
                defaultValue = {item?.ID_CUENTA}
                />
        </div>
        <div className="">
            <label
                className=""
                htmlFor="tipo_item"
            >Tipo Item: </label>
            <input
                id="tipo_item"
                type="text"
                className=""
                placeholder="Tipo Item"
                name="tipo_item" 
                defaultValue = {item?.TIPO_ITEM}
                />
                
        </div>
        <div className="">
            <label
                className=""
                htmlFor="nombre_item"
            >Nombre Item: </label>
            <input
                id="nombre_item"
                type="text"
                className=""
                placeholder="Nombre Item"
                name="nombre_item" 
                //defaultValue={item[0]?.NOMBRE_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="fecha_fabri_item"
            >Fecha Fabricación: </label>
            <input
                id="fecha_fabri_item"
                type="text"
                className=""
                placeholder="Fecha Fabricación Item"
                name="fecha_fabri_item" 
                //defaultValue = {item[0]?.FECHA_FABRI_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="fecha1_cadu_item"
            >Fecha Caducidad 1: </label>
            <input
                id="fecha1_cadu_item"
                type="text"
                className=""
                placeholder="Fecha 1 caducidad Item"
                name="fecha1_cadu_item" 
                //defaultValue = {item[0]?.FECHA1_CADU_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="fecha2_cadu_item"
            >Fecha Caducidad 2: </label>
            <input
                id="fecha2_cadu_item"
                type="text"
                className=""
                placeholder="Fecha 2 caducidad Item"
                name="fecha2_cadu_item" 
                //defaultValue = {item[0]?.FECHA2_CADU_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="lote_item"
            >Lote Item: </label>
            <input
                id="lote_item"
                type="text"
                className=""
                placeholder="Lote de Item"
                name="lote_item" 
                //defaultValue = {item[0]?.LOTE_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="cantidad_lote_item"
            >Cantidad de Lote: </label>
            <input
                id="cantidad_lote_item"
                type="text"
                className=""
                placeholder="Cantidad Lote de Item"
                name="cantidad_lote_item" 
                //defaultValue = {item[0]?.CANTIDAD_LOTE_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="precio_item"
            >Precio Item: </label>
            <input
                id="precio_item"
                type="text"
                className=""
                placeholder="Precio Item"
                name="precio_item" 
                //defaultValue = {item[0]?.PRECIO_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="peso_item"
            >Peso Item: </label>
            <input
                id="peso_item"
                type="text"
                className=""
                placeholder="Peso de Item"
                name="peso_item" 
                //defaultValue = {item[0]?.PESO_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="conservacion_item"
            >Conservación Item: </label>
            <input
                id="conservacion_item"
                type="text"
                className=""
                placeholder="Conservación Item"
                name="conservacion_item" 
                //defaultValue = {item[0]?.CONSERVACION_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="detalle_item"
            >Detalle Item: </label>
            <input
                id="detalle_item"
                type="text"
                className=""
                placeholder="Detalle Item"
                name="detalle_item" 
                //defaultValue = {item[0]?.DETALLE_ITEM}
                />
        </div>

        <div className="">
            <label
                className=""
                htmlFor="estado_item"
            >Estado Item: </label>
            <input
                id="estado_item"
                type="text"
                className=""
                placeholder="Estado Item"
                name="estado_item" 
                //defaultValue = {item[0]?.ESTADO_ITEM}
                />
        </div>
    </>
)

export default FormularioItem