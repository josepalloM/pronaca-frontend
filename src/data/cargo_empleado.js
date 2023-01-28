export async function obtenerCargos(){
    const url = "http://localhost:4000/api/cargo_empleado/"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerCargo(id) {
    const url = "http://localhost:4000/api/cargo_empleado"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}