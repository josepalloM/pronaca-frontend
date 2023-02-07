import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import FormularioLogin from '../components/FormularioLogin'


function Login() {
  
  const navigate = useNavigate();

	const { usuario, contrasenia, onInputChange, onResetForm } =
		useForm({
			usuario: '',
			contrasenia: '',
		});

	const onLogin = e => {
		e.preventDefault();

		navigate('/index', {
			replace: true,
			state: {
				logged: true,
				usuario,
			},
		});

		onResetForm();
	};
  
  return (
    <>
      <h1 className="font-black text-4xl">Login</h1>
      <p >Registrate para ingresar al sistema</p>

      
      <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
        {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}
        
        <form onSubmit={onLogin}>

          <div className="mb-4">
            <label
                className="flex justify-start text-gray-800"
                htmlFor="usuario"
            >Usuario: </label>
            <input
                id="usuario"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Usuario"
                
						    onChange={onInputChange}
                required
                autoComplete='off'
                name="usuario" />
            <label
                className="flex justify-start text-gray-800"
                htmlFor="contrasenia"
            >Contraseña </label>
            <input
                id="contrasenia"
                type="password"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Contraseña"
                
						    onChange={onInputChange}
                name="contrasenia" />
          </div><br></br>

          <div className="grid grid-cols-2 gap-2">
              <div className='flex justify-center'>
                <input
                  type="submit"
                  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                  value="Ingresar"
                />
              </div>

              <div className='flex justify-center'>
                <button
                  type="button"
                  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                  onClick={() => navigate(-1)}
                >Volver</button>
              </div>
          </div>
          
			</form>


      
      </div>
    </>
  )
}

export default Login