import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormularioCargo from "../components/FormularioCargo";
import Error from "../components/Error";
import { agregarCargo } from "../data/cargo_empleado";
import React, { useState } from 'react';

export async function action({ request }) {

  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  //validaciones
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay erroes
  if (Object.keys(errores).length) {
    return errores
  }

  await agregarCargo(datos)

  console.log(datos)
  return redirect('/cargos')
}

function NuevoCargo() {
  const errores = useActionData()
  const navigate = useNavigate()

  // Cambiar dinámicamente con los departamentos de la base de datos
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <>
      <h1 className="font-black text-4xl text-black">Nuevo Cargo</h1>
      <p className="mt-3">Ingrese la información del nuevo cargo</p>

      <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cargo</div>
      <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="POST"


        >
          <FormularioCargo />

          <div className="grid grid-cols-2 gap-2">

            <div>
              <br></br>
              <label>Departamento:</label>
              <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div><br></br>
            <div>
              <input
                type="submit"
                className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                value="Registrar Cargo"
              />
            </div>


            <div>
              <button
                type="button"
                className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                onClick={() => navigate(-1)}
              >Volver</button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NuevoCargo