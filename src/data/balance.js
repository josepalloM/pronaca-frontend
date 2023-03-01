export async function obtenerBalance(){
    const url = "http://localhost:4000/api/balance/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function agregarBalance(datos) {
    try {
        const url = "http://localhost:4000/api/balance/"
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


export async function obtenerDetalleBalance(id) {
    const url = "http://localhost:4000/api/detalle_balance"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}