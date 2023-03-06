export async function obtenerEstado(){
    const url = "http://localhost:4000/api/estado/"
    const respuesta = await fetch(url)

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}


export async function agregarEstado(datos) {
    try {
        const url = "http://localhost:4000/api/estado/"
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


export async function verDetalleEstado(id) {
    try {
      const url = "http://localhost:4000/api/estado";

      const respuesta = await fetch(`${url}/${id}`)
      const resultado = await respuesta.json()
      console.log('Estado obtenido: ', resultado)
    return resultado
    } catch (error) {
      console.log(error);
      throw error;
    }
}