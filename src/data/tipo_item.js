export async function obtenerTiposItem(){
    const url = "http://localhost:4000/api/tipo_item"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerTipoItem(id){
    const url = "http://localhost:4000/api/tipo_item"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function agregarTipoItem(datos) {

    try {
        const url = "http://localhost:4000/api/tipo_item"
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

