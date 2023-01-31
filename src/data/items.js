//Items
export async function obtenerItems(){
    //const url = "http://localhost:4000/api/item/"
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerItem(id){
    //const url = "http://localhost:4000/api/item/"
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function agregarItems(datos) {

    try {
        //const url = "http://localhost:4000/api/item/"
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
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

export async function actualizarItem(id, datos){
    try {
        const url = "http://localhost:4000/api/item"
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

// Lista_Items
export async function obtenerListaItems(){
    //const url = "http://localhost:4000/api/lista_items"
    const respuesta = await fetch(import.meta.env.VITE_API_URL_LISTA)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerListaItem(id){
    //const url = "http://localhost:4000/api/lista_items"
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LISTA}/${id}`)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function agregarListaItems(datos) {

    try {
        //const url = "http://localhost:4000/api/lista_items"
        const respuesta = await fetch(import.meta.env.VITE_API_URL_LISTA, {
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