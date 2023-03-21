export async function obtenerTodasFlotas(){
    const url = "http://localhost:4000/api/flota"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerFlotas(id){
    const url = "http://localhost:4000/api/flota"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerFlota(id) {
    const url = "http://localhost:4000/api/flota/one"
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

export async function aumentarCantidad(id, datos){
    try {
        const url = "http://localhost:4000/api/flota/add"
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

export async function disminuirCantidad(id, datos){
    try {
        const url = "http://localhost:4000/api/flota/rest"
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
        if (error.message === 'Check constraint \'productos_chk_1\' is violated.') {
            alert("El vehículo ya no tiene pedidos")
        }else{
            console.log(error.message)
        }
    }
}