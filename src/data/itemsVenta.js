export async function obtenerItemsVenta(){
    const url = "http://localhost:4000/api/itemVenta"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerItemVenta(id){
    const url = "http://localhost:4000/api/itemVenta"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

// // ------------Lista_Items-----------------
// export async function obtenerListaItemsVenta(){
//     //const url = "http://localhost:4000/api/lista_items"
//     const respuesta = await fetch(import.meta.env.VITE_API_URL_LISTA)
//     const resultado = await respuesta.json()
//     return resultado
// }

// export async function obtenerListaItemVenta(id){
//     //const url = "http://localhost:4000/api/lista_items"
//     const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LISTA}/${id}`)

//     const resultado = await respuesta.json()
//     console.log(resultado)
//     return resultado
// }