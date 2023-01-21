import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {

    const location = useLocation()
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CONTENIDO DEL LAYOUT</h2>
                <nav className="mt-10">
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to='/pedidos'>Pedidos</Link>
                    <Link 
                        
                        to='/produccion'>Producción</Link>
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to='/clientes'>Clientes</Link>
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to='/empleados'>Empleados</Link>
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to='/finanzas'>Finanzas</Link>

                </nav>
            </aside>

            <main>
                
                <Outlet />
            </main>


        </div>

    )
}

export default Layout