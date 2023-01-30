export async function obtenerEstado(){
    const url = "http://localhost:4000/api/estado/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}