import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Login from '../pages/Login';

export const RutasPrivadas = ({ usuario, children, redirectTo, setUsuario }) => {
	
	
	if(usuario==""){
		
		return	<Navigate to='/login' />
		//return <Login />
	}

	//return children
	return children ? {children, usuario} : <Outlet/>
	//return location.state?.logged ? children : <Navigate to='/login' />;
};