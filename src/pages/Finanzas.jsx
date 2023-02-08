import React from 'react'

function Finanzas() {
  return (

    <>
      <h1 className="font-black text-4xl text-blue-900">Finanzas</h1>

      <div className="ml-40 mt-5">
        <div>
          <img width="150" className="bg-orangebg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LVpkS4AORvm2_vM2hRMdZYLJrLYgNSz1AQ&usqp=CAU"></img>
          <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"><a href="/finanzas/cuentas">Cuentas</a></button>
        </div>
        <div className="mt-6">
          <img width="150" className="bg-orangebg" src="https://thumbs.dreamstime.com/b/travel-ticket-icon-logo-isolated-sign-symbol-vector-illustration-collection-high-quality-black-style-icons-212336514.jpg"></img>
          <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"><a href="/finanzas/asientos">Asientos</a></button>
        </div>
        <div className="mt-6">
          <img width="150" className="bg-orangebg" src="https://i.pinimg.com/736x/e0/23/24/e02324b476f5d22ce2b0483b53efb113.jpg"></img>
          <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"><a href="/finanzas/balance">Balance General</a></button>
        </div>
        <div className="mt-6">
          <img width="150" className="bg-orangebg" src="https://cdn-icons-png.flaticon.com/512/2037/2037131.png"></img>
          <button className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"><a href="/finanzas/estado_de_resultados">Estado de Resultados</a></button>
        </div>
      </div>

    </>
    
    
    
  )
}

export default Finanzas