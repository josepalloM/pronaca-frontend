export async function obtenerValorIess(id) {
    const url = "http://localhost:4000/api/movimiento_empleado"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function actualizarMovimiento(id){
    try {
        const url = "http://localhost:4000/api/movimiento_empleado"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'PUT',
            body:JSON.stringify(),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}
export async function eliminarMovimiento_empleado(id){
    try {
        const url = "http://localhost:4000/api/movimiento_empleado"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarValorIess(datos){
    try {
        const url = "http://localhost:4000/api/movimiento_empleado/iess"
        const respuesta = await fetch(url, {
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

export async function agregarMovimientoEmpleado(datos) {

    try {
        const url = "http://localhost:4000/api/movimiento_empleado"
        const respuesta = await fetch(url, {
            method:'POST',
            body:JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })
        console.log("aaa",respuesta)
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}