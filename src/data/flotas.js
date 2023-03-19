export async function obtenerFlotas(id){
    const url = "http://localhost:4000/api/flota"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerFlota(id) {
    const url = "http://localhost:4000/api/flota/"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarFlota(datos) {

    try {
        const url = "http://localhost:4000/api/flota/"
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

export async function eliminarFlota(id){
    try {
        const url = "http://localhost:4000/api/flota"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarFlota(id, datos){
    try {
        const url = "http://localhost:4000/api/flota/"
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