import FormularioLogin from "../components/FormularioLogin"
import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom"
import Error from "../components/Error";
import { consultarEmpleado } from "../data/login";
import { useContext } from "react";
import {UserContext} from "../context/UserProvider"

export async function loader({body}){
  return null
}



export async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const errores = []
  
  const resultado = await consultarEmpleado(datos)
  if(resultado.text === 'Empleado no existe'){
    errores.push("Usuario no encontrado")
  }

 
  if(Object.keys(errores).length){
    return errores
  }
  redirect ('/Login')
}


function Login(){
  
  const {us, setUser} = useContext(UserContext)

  const errores = useActionData()
  const navigate = useNavigate()


  async function handleClick () {
    
    const datos = {
      nombre: nombre.value,
      cedula: cedula.value
    }
    
    const resultado = await consultarEmpleado(datos)
    if(resultado.text === 'Empleado existe'){
      setUser(datos.nombre)
      return navigate('/');
    }else{
      if (!confirm('El empleado no existe, ingrese nuevamente ')){
        e.preventDefault()
      }      
      return navigate('/Login');
    }
     
  }


  return(
    <>
      <h1 className="font-black text-4xl">Login</h1>
      <p >Registrate para ingresar al sistema</p>

      <div className="bg-white  border-2 shadow rounded-md md:w-1/2 mx-auto px-5 py-10 mt-5">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="POST"
          
        >
          <FormularioLogin
             
          />
          <div className="grid grid-cols-2 gap-2">
              <div className='flex justify-center'>
                <input
                  type="submit"
                  onClick={handleClick}
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

      </Form>

      </div>
      

    </>
  )
}






















/*import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import FormularioLogin from '../components/FormularioLogin'


function Login({ setUsuario }) {


  return (
    <>
      <h1 className="font-black text-4xl">Login</h1>
      <p >Registrate para ingresar al sistema</p>


      <div className="bg-white  border-2 shadow rounded-md md:w-1/2 mx-auto px-5 py-10 mt-5">
        { {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} }

        <form onSubmit={handelSubmit}>

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
*/

export default Login