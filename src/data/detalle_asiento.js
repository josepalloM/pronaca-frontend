export async function obtenerDetallesAsiento(){
    const url = "http://localhost:4000/api/detalle_asiento"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerDetalleAsiento(id) {
    const url = "http://localhost:4000/api/detalle_asiento"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarDetalleAsiento(datos) {

    try {
        const url = "http://localhost:4000/api/detalle_asiento"
        const respuesta = await fetch(url, {
            method:'POST',
            body:JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function eliminarDetalleAsiento(id){
    try {
        const url = "http://localhost:4000/api/detalle_asiento"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarDetalleAsiento(id, datos){
    try {
        const url = "http://localhost:4000/api/detalle_asiento"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'PUT',
            body:JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}