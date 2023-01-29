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