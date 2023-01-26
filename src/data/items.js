export async function obtenerItems(){
    const url = "http://localhost:4000/api/item/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function agregarItems(datos) {

    try {
        const url = "http://localhost:4000/api/item/"
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