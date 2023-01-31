export async function actualizarAsientos(){
    try {
        const url = "http://localhost:4000/api/asiento/cuentasAsiento"
        const respuesta = await fetch(url, {
            method:'GET'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}