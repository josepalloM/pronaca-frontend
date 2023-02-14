export async function obtenerParametros(){
    const url = "http://localhost:4000/api/parametro_iess"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function eliminarParametro(id){
    try {
        const url = "http://localhost:4000/api/parametro_iess"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}
export async function agregarParametro(datos) {

    try {
        const url = "http://localhost:4000/api/parametro_iess"
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
export async function obtenerParametro(id) {
    const url = "http://localhost:4000/api/parametro_iess"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function actualizarParametro(id, datos){
    try {
        const url = "http://localhost:4000/api/parametro_iess"
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