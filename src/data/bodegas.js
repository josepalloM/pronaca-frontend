export async function obtenerBodegas(){
    const url = "http://localhost:4000/api/bodega"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarBodega(datos) {
    try {
        const url = "http://localhost:4000/api/bodega"
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

export async function eliminarBodega(id){
    try {
        const url = "http://localhost:4000/api/bodega"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}