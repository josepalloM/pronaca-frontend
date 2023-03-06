export async function obtenerDetalle_Pedidos(){
    const url = "http://localhost:4000/api/detalle_pedido"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerDetalle_Pedido(id) {
    const url = "http://localhost:4000/api/detalle_pedido"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarDetalle_Pedido(datos) {

    try {
        const url = "http://localhost:4000/api/detalle_pedido"
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

export async function eliminarDetalle_Pedido(id){
    try {
        const url = "http://localhost:4000/api/detalle_pedido"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarDetalle_Pedido(id, datos){
    try {
        const url = "http://localhost:4000/api/detalle_pedido"
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