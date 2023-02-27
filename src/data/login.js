export async function consultarEmpleado(datos) {
    try {
        const url = "http://localhost:4000/api/login"
        const respuesta = await fetch(url, {
            method:'POST',
            body:JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const resultado = await respuesta.json()
        return resultado
        
    }catch (error){
        console.log(error)
    }
}