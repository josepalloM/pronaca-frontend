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

export async function obtenerBodega(id) {
    const url = "http://localhost:4000/api/bodega"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function actualizarBodega(datos,datos2){
    try {
        const url = "http://localhost:4000/api/bodega"
        const respuesta = await fetch(url, {
            method:'PUT',
            body:JSON.stringify([datos,datos2]),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarItemBodega(id_item,cantidad,id_bodega){
    try {
        const url = "http://localhost:4000/api/bodega"
        const respuesta = await fetch(`${url}/${id_item}`, {
            method:'PUT',
            body:JSON.stringify({id_bodega, cantidad, id_item}),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function obtenerBodegaItem(id) {
    const url = "http://localhost:4000/api/bodega"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}