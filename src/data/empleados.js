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