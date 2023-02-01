export async function obtenerCuentas(){
    const url = "http://localhost:4000/api/cuenta"
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerCuenta(id){
    const url = "http://localhost:4000/api/cuenta"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function agregarCuentas(datos) {

    try {
        const url = "http://localhost:4000/api/cuenta"
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
export async function agregarCuenta(id) {

    try {
        const url = "http://localhost:4000/api/cuenta/"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'POST'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarPasivos(){
    try {
        const url = "http://localhost:4000/api/cuenta/cuentasPasivo"
        const respuesta = await fetch(url, {
            method:'GET'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}

export async function actualizarCostos(){
    try {
        const url = "http://localhost:4000/api/cuenta/cuentasCostos"
        const respuesta = await fetch(url, {
            method:'GET'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}