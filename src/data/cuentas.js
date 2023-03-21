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

export async function actualizarCostosGastos(id){
    
        const url = "http://localhost:4000/api/cuenta"
        await fetch(`${url}/cuentasCostosGastos/${id}`)
        console.log("w",id)
    
}
export async function actualizarCostos(){
    try {
        const url = "http://localhost:4000/api/cuenta/cuentasCostos"
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}
export async function obtenerCuentasInventario(id){
    const url = "http://localhost:4000/api/cuenta/obtenerCuentasInventario"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function cuentasInventario(id){
    
    const url = "http://localhost:4000/api/cuenta"
    await fetch(`${url}/cuentasInventario/${id}`)
  
}

export async function actualizarCuentasPedidos(id){
    
    const url = "http://localhost:4000/api/cuenta"
    await fetch(`${url}/cuentasPedidos/${id}`)
    
}
export async function eliminarCuenta(id){
    try {
        const url = "http://localhost:4000/api/cuenta"
        const respuesta = await fetch(`${url}/${id}`, {
            method:'DELETE'
        })
        await respuesta.json()
    }catch (error){
        console.log(error)
    }
}
export async function obtenerCuentasPedidos(id){
    const url = "http://localhost:4000/api/cuenta/numCuentasPedidos"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function actualizarCuentasPedidosProveedor(id){
    
    const url = "http://localhost:4000/api/cuenta"
    await fetch(`${url}/cuentasPedidosProveedor/${id}`)
    
}
export async function obtenercuentasPedidosProveedor(id){
    const url = "http://localhost:4000/api/cuenta/numCuentasPedidosProveedor"
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerCuentasTransporte(id){
    
    const url = "http://localhost:4000/api/cuenta"
    const respuesta = await fetch(`${url}/obtenerCuentasTransporte/${id}`)
    const resultado = await respuesta.json()
    return resultado
  
}
export async function pagarCuentasTransporte(id){
    
    const url = "http://localhost:4000/api/cuenta"
    await fetch(`${url}/pagarCuentasTransporte/${id}`)
  
}
export async function actualizarCuentasTransporte(id){
    
    const url = "http://localhost:4000/api/cuenta"
    await fetch(`${url}/actualizarCuentasTransporte/${id}`)
  
}