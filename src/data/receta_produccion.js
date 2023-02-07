export async function obtenerRecetasProduccion(){
    const url = "http://localhost:4000/api/receta"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerRecetaProduccion(id) {
    const url = "http://localhost:4000/api/receta"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarRecetaProduccion(datos) {

    try {
        const url = "http://localhost:4000/api/receta"
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

export async function eliminarRecetaProduccion(id){
    try {
        const url = "http://localhost:4000/api/receta"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarRecetaProduccion(id, datos){
    try {
        const url = "http://localhost:4000/api/receta"
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