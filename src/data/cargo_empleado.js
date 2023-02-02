export async function obtenerCargos(){
    const url = "http://localhost:4000/api/cargo_empleado/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function obtenerCargo(id) {
    const url = "http://localhost:4000/api/cargo_empleado/"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarCargo(datos) {

    try {
        const url = "http://localhost:4000/api/cargo_empleado/"
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
export async function actualizarCargo(id, datos){
    try {
        const url = "http://localhost:4000/api/cargo_empleado"
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

export async function eliminarCargo(id){
    try {
        const url = "http://localhost:4000/api/cargo_empleado"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}