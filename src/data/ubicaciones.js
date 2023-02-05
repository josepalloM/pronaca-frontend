export async function obtenerUbicaciones(){
    const url = "http://localhost:4000/api/ubicacion"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerUbicacion(id) {
    const url = "http://localhost:4000/api/ubicacion"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}