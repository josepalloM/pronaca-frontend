import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Login from '../pages/Login';

export const RutasPrivadas = ({ usuario, children, redirectTo, setUsuario }) => {
	console.log("usuario priv ",usuario)
	
	
	if(usuario===null){
		
		//return	<Navigate to='/login' />
		return <Login usuario={usuario} setUsuario={setUsuario} />
	}

	//return children
	return children ? {children, usuario} : <Outlet/>
	//return location.state?.logged ? children : <Navigate to='/login' />;
};