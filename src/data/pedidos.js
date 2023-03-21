export async function obtenerPedidos(){
    const url = "http://localhost:4000/api/pedido"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerPedido(id) {
    const url = "http://localhost:4000/api/pedido/"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarPedido(datos) {

    try {
        const url = "http://localhost:4000/api/pedido/"
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

export async function eliminarPedido(id){
    try {
        const url = "http://localhost:4000/api/pedido"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarPedido(id, datos){
    try {
        const url = "http://localhost:4000/api/pedido"
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

export async function actualizarEstados(id, datos){
    try {
        const url = "http://localhost:4000/api/pedido/all"
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