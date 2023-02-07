export async function obtenerTipoListaProducs(){
    const url = "http://localhost:4000/api/tipo_lista"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerTipoListaProduc(id) {
    const url = "http://localhost:4000/api/tipo_lista"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarTipoListaProduc(datos) {

    try {
        const url = "http://localhost:4000/api/tipo_lista"
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

export async function eliminarTipoListaProduc(id){
    try {
        const url = "http://localhost:4000/api/tipo_lista"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarTipoListaProduc(id, datos){
    try {
        const url = "http://localhost:4000/api/tipo_lista"
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