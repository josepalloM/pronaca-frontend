import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {

    const location = useLocation()
    return (
        <div>
            <aside>
                <h2>CONTENIDO DEL LAYOUT</h2>
                <nav>
                    <Link 
                        
                        to='/pedidos'>Pedidos</Link>
                    <Link 
                        
                        to='/produccion'>Producción</Link>
                    <Link 
                        
                        to='/clientes'>Clientes</Link>
                    <Link 
                    
                        to='/empleados'>Empleados</Link>
                    <Link 
                        
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