export async function obtenerEmpleados(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL_GET)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarEmpleado(datos) {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL_POST, {
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

/////////////////////////////////eliminar y agregar empleado
export async function eliminarEmpleado(id){
    try {
        const url = "http://localhost:4000/api/empleado"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
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