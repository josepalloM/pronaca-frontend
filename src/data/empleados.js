

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



export async function obtenerEmpleado(id) {
    const url = "http://localhost:4000/api/empleado"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export function actualizarEmpleado(empleadoId, datos) {
    // function code here
}


export async function eliminarEmpleado(id) {
    // function implementation
 }
 




