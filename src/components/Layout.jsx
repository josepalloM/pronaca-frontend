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
                        <div className={`mt-24 flex space-x-2 justify-center ${!open && "scale-0"}`}>
                            <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block w-10/12 px-6 py-2.5 bg-white border-b-2 text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow hover:bg-grey hover:shadow-lg focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                <Link
                                    className={`${location.pathname === '/'}`}
                                    to='/opciones'>Pedidos</Link>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className={`my-2 flex space-x-2 justify-center ${!open && "scale-0"}`}>
                            <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className=" border-b-2 inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                        font-medium text-xs leading-tight uppercase rounded
                                        shadow hover:bg-grey hover:shadow focus:bg-grey
                                        focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                        active:shadow transition duration-150 ease-in-out">
                                <Link
                                    className={`${location.pathname === '/'}`}
                                    to='/produccion'>Producción</Link>
                            </button>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 flex space-x-2 justify-center ${!open && "scale-0"}`}>
                            <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className=" border-b-2 inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                        font-medium text-xs leading-tight uppercase rounded
                                        shadow hover:bg-grey hover:shadow-lg focus:bg-grey
                                        focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                        active:shadow transition duration-150 ease-in-out">
                                <Link
                                    className={`${location.pathname === '/' }`}
                                    to='/clientes'>Clientes</Link>
                            </button>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 flex space-x-2 justify-center ${!open && "scale-0"}`}>
                            <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="border-b-2 inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                        font-medium text-xs leading-tight uppercase rounded
                                        shadow hover:bg-grey hover:shadow-lg focus:bg-grey
                                        focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                        active:shadow transition duration-150 ease-in-out">
                                <Link
                                    className={`${location.pathname === '/' }`}
                                    to='/empleados'>Empleados</Link>
                            </button>
                        </div>
                    </li>
                    <li >
                        <div className={`my-2 flex space-x-2 justify-center ${!open && "scale-0"}`}>
                            <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="border-b-2 inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                        font-medium text-xs leading-tight uppercase rounded
                                        shadow-md hover:bg-grey hover:shadow-lg focus:bg-grey
                                        focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                        active:shadow transition duration-150 ease-in-out">
                                <Link
                                    className={`${location.pathname === '/' }`}
                                    to='/finanzas'>Finanzas</Link>
                            </button>
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