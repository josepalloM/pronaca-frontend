export async function obtenerDepartamentos(){
    const url = "http://localhost:4000/api/departamento/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log('resultado')
    return resultado
}

export async function agregarDepartamento(datos) {

    try {
        const url = "http://localhost:4000/api/departamento/"
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
export async function obtenerDepartamento(id) {
    const url = "http://localhost:4000/api/departamento"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    console.log('Departamento obtenido: ', resultado)
    return resultado
}

export async function actualizarDepartamento(id, datos){
    try {
        const url = "http://localhost:4000/api/departamento"
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

export async function eliminarDepartamento(id){
    try {
        const url = "http://localhost:4000/api/departamento"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}