export async function obtenerAsiento(id) {
    const url = "http://localhost:4000/api/asiento"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerAsientos(){
    const url = "http://localhost:4000/api/asiento/"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerUltimoAsiento(id){
    const url = "http://localhost:4000/api/asiento/"
    const respuesta = await fetch(`${url}newAsiento/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function agregarAsiento(datos) {

    try {
        const url = "http://localhost:4000/api/asiento"
        const respuesta = await fetch(url, {
            method:'POST',
            body:JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
        console.log("ddd"+respuesta)
    }catch (error){
        console.log(error)
    }
}
export async function eliminarAsiento(id){
    try {
        const url = "http://localhost:4000/api/asiento"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}