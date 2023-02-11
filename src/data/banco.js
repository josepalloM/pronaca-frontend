export async function obtenerBancos(){
    const url = "http://localhost:4000/api/banco"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function eliminarBanco(id){
    try {
        const url = "http://localhost:4000/api/banco"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}
export async function agregarBanco(datos) {

    try {
        const url = "http://localhost:4000/api/banco"
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
export async function obtenerBanco(id) {
    const url = "http://localhost:4000/api/banco"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function actualizarBanco(id, datos){
    try {
        const url = "http://localhost:4000/api/banco"
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