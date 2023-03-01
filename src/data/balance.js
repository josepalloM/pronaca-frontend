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


export async function verDetalleBalance(id) {
    try {
      const url = "http://localhost:4000/api/balance";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      console.log('Balance obtenido: ', resultado)
    return resultado
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  