import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import {useState, useEffect, useContext} from "react";
import { UserContext } from "../context/UserProvider";

function Layout() {

    const [open, setOpen] = useState(true);
    const location = useLocation()
    const navigate = useNavigate();

    const {us, setUser} = useContext(UserContext)
    
    const onLogout = () => {
	    setUser("")
        navigate('/')     
	};
    
    // useEffect(()=>{
    //     localStorage.setItem('user', JSON.stringify(user))
        
    // }, [user])

    return (
        <div className="min-h-screen flex">
            <h1>{us ? "en linea" : "no en linea"}</h1>

            <aside className={`md:min-h-screen bg-orange-500 relative ${open ? "w-56" : "w-0"} duration-300 relative`}>
                <AiOutlineMenu className="bg-white text-black text-3xl absolute
                -right-10 top-2 cursor-pointer" onClick={() => setOpen(!open)}/>
                <Link 
                    to="/">
                    <div className="flex justify-center "> 
                        <img className="w-9/12 h-9/12" src="https://www.pronaca.com/wp-content/uploads/2022/04/cropped-favicon.png"/>
                    </div>
                </Link>
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
                            to='/empleados_menu'>
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
                    <li >
                        <div className={`my-2 text-center ${!open && "scale-0"}`}>
                            <Link
                                state={location.state}
                                className={`${location.pathname === '/' }`}
                                to='/opciones/bodega'>
                                <button type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                    Bodegas
                                </button>
                            </Link>
                        </div>
                    </li>
                                       
                    <li >
                        {us ? (
                            <div className={`mt-40 text-center ${!open && "scale-0"}`}>
                            <p className="text-1xl font-bold  bg-white">Bienvenido</p>
                            <p className="uppercase text-2xl font-bold  bg-white">{us}</p>
                            </div>
                        ) : (
                            <div className={`mt-40 text-center ${!open && "scale-0"}`}>
                            <h3></h3>
                            </div>
                        )}
                        
                    </li>
                    <li >

                        {us ? (
                            <div className={`my-2 text-center ${!open && "scale-0"}`}>
                            <Link                               
                                className={`${location.pathname === '/' }`}
                                to='/login'>
                                <button type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={onLogout}
                                    className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                        font-medium text-xs leading-tight uppercase rounded
                                        shadow-md hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                        focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                        active:shadow transition duration-150 ease-in-out">
                                    Cerrar Sesión 
                                </button>
                            </Link>
                            </div>
                        ) : (
                            <div className={`my-2 text-center ${!open && "scale-0"}`}>
                        <Link
                            className={`${location.pathname === '/' }`}
                            to='/login'>
                            <button type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="inline-block w-10/12 px-6 py-2.5 bg-white text-black
                                    font-medium text-xs leading-tight uppercase rounded
                                    shadow-md hover:bg-amber-400 hover:shadow-lg focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out">
                                Iniciar Sesión 
                            </button>
                        </Link>
                        </div>
                        )}
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