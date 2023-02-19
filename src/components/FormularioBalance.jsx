import { useState } from 'react';
import { useForm } from 'react-hook-form';


const FormularioBalance = () => {
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
    const { register, handleSubmit, errors } = useForm();

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            

<div className="flex">
  <div className="mb-4 mr-4">
    <label
      className="flex justify-start text-gray-800"
      htmlFor="fecha_inicio"
    >
      Fecha de Inicio:{" "}
    </label>
    <input
      id="fecha_inicio"
      type="date"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Fecha de Inicio"
      name="fecha_inicio"
    />
  </div>
  <div className="mb-4">
    <label
      className="flex justify-start text-gray-800"
      htmlFor="fecha_inicio"
    >
      Fecha de Fin:{" "}
    </label>
    <input
      id="fecha_fin"
      type="date"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Fecha de Fin"
      name="fecha_fin"
    />
    
  </div>
</div>

<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="activos"
   >Activos: </label>
   <input
      id="activos"
      type="text"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor de los activos"
      name="activos"
      
   />
   
</div>


<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="pasivos"
   >Activos: </label>
   <input
      id="pasivos"
      type="text"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor de los pasivos"
      name="pasivos"
      
   />
   
</div>

<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="resultados"
   >Resultados: </label>
   <input
      id="resultados"
      type="text"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor de los resultados"
      name="resultados"
      
   />
   
</div>

{/* 

<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="activos"
   >Activos: </label>
   <input
      id="activos"
      type="number"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor de los activos"
      name="activos"
      ref={register({ required: true })}
   />
   {errors.activos && <span className="text-red-500">Campo requerido</span>}
</div>
<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="pasivos"
   >Pasivos: </label>
   <input
      id="pasivos"
      type="number"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor de los pasivos"
      name="pasivos"
      ref={register({ required: true })}
   />
   {errors.pasivos && <span className="text-red-500">Campo requerido</span>}
</div>
<div className="mb-4">
   <label
      className="flex justify-start text-gray-800"
      htmlFor="patrimonio"
   >Patrimonio: </label>
   <input
      id="patrimonio"
      type="number"
      className="mt-2 block w-full p-3 bg-gray-50"
      placeholder="Valor del patrimonio"
      name="patrimonio"
      ref={register({ required: true })}
   />
   {errors.patrimonio && <span className="text-red-500">Campo requerido</span>}
</div>
        */}


        </>
    );
};
export default FormularioBalance;

