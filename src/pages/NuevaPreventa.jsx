import React, {useRef, useState} from 'react';
import {Form, useActionData, useNavigate, redirect, useLoaderData} from "react-router-dom";
import Error from "../components/Error.jsx";
import FormularioPreventa from "../components/FormularioPreventa.jsx";
import { agregarPreventa } from '../data/preventa.js';
import { obtenerEmpleados } from '../data/empleados.js';
import { obtenerClientes } from '../data/clientes.js';

export async function loader() {
    const clientes = await obtenerClientes()
    const empleados = await obtenerEmpleados()
    return {clientes,empleados};
}

export async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    if(Object.keys(errores).length){
        return errores
    }
    
    await agregarPreventa(datos)
  
    console.log(datos);

    return redirect('/opciones/preventa');
}

function NuevaPreventa(props) {
    const {clientes,empleados} = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()
    //console.log(clientes)
    return (
        <>
            <h1 className="font-black text-4xl text-black">Nueva Preventa</h1>
            <p className="mt-3">Llené todos los campos para agregar una nueva preventa</p>

            <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Preventa</div>
            <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method="POST">
                    <FormularioPreventa clientes={clientes} empleados={empleados}/>
                    <div className="grid grid-cols-2 gap-2 text-center">
                        <div>
                            <input
                                type="submit"
                                className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                          shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                          focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                          active:shadow transition duration-150 ease-in-out"
                                value="Registrar Preventa"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                          shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                          focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                          active:shadow transition duration-150 ease-in-out"
                                onClick={() => navigate(-1)}
                            >Cancelar</button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default NuevaPreventa;