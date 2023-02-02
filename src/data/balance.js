export async function obtenerBalance(){
    const url = "http://localhost:4000/api/balance/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}