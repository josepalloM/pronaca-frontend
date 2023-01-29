export async function obtenerEmpleados(){
    const url = "http://localhost:4000/api/empleado/"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarEmpleado(datos) {

    try {
        const url = "http://localhost:4000/api/empleado/"
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

export async function obtenerEmpleado(id) {
    const url = "http://localhost:4000/api/empleado"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function actualizarEmpleado(id, datos){
    try {
        const url = "http://localhost:4000/api/empleado"
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