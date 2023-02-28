export async function obtenerBodegas(){
    const url = "http://localhost:4000/api/bodega"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}