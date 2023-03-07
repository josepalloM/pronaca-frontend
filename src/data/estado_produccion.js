export async function obtenerEstadosProduccion(){
    const url = "http://localhost:4000/api/estado_produccion"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerEstadoProduccion(id){
    const url = "http://localhost:4000/api/estado_produccion"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function agregarEstadoProduccion(datos) {

    try {
        const url = "http://localhost:4000/api/estado_produccion"
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