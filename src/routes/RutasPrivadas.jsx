import { Navigate, useLocation } from 'react-router-dom';

export const RutasPrivadas = ({ children }) => {
	const location= useLocation();
    console.log(location.state)

	return location.state?.logged ? children : <Navigate to='/login' />;
};