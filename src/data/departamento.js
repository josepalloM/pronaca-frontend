export async function obtenerDepartamentos(){
    const url = "http://localhost:4000/api/departamento/"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
