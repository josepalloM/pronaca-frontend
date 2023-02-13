export async function obtenerEmpleado(nombre) {
    const url = "http://localhost:4000/api/login"
    const respuesta = await fetch(`${url}/${nombre}`)
    const resultado = await respuesta.json()
    return resultado
}