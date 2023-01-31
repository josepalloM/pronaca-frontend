import { Outlet, Link, useLocation } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import {useState} from "react";

function Layout() {
    const [open, setOpen] = useState(true);
    const location = useLocation()
    return (
        <div className="min-h-screen flex">
            <aside className={`md:min-h-screen bg-orange-500 relative ${open ? "w-56" : "w-0"} duration-300 relative`}>
                <AiOutlineMenu className="bg-white text-black text-3xl absolute
                -right-10 top-2 cursor-pointer" onClick={() => setOpen(!open)}/>
                <div className="inline-flex ">
                    <img className="bg-orangebg" src="https://gestion3a.com/wp-content/uploads/2021/10/pronaca-noticias-sin-imagen-960x540-1.png"/>
                </div>
                <ul>
                    <li>
                        <div className={`mt-24 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/'}`}
                                    to='/opciones'>
                                    <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block w-10/12 px-8 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                Pedidos 
                            </button>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className={`my-2 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/'}`}
                            to='/gestor'>
                            <button type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                    Producción
                            </button>
                         </Link>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/' }`}
                            to='/clientes'>
                            <button type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                Clientes
                            </button>
                        </Link>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/' }`}
                            to='/empleados'>
                            <button type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                font-medium text-xs leading-tight uppercase rounded
                                shadow hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                active:shadow transition duration-150 ease-in-out">
                                Empleados
                            </button>
                        </Link>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/' }`}
                            to='/finanzas'>
                            <button type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                Finanzas
                            </button>
                        </Link>
                        </div>
                    </li>
                </ul>
            </aside>


            <main className=" bg-gray-100  md:w-full  p-10 h-screen overflow-scroll ">

                <Outlet />
            </main>


        </div>

    )
}
/* Header */

export default Layout