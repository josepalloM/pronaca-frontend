export async function obtenerValorIess(id) {
    const url = "http://localhost:4000/api/movimiento_empleado"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
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
        console.log(JSON.stringify(datos))
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}