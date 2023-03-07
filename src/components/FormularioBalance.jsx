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


            {/**/}
            <div className="mb-4">
               <label
                  className="flex justify-start text-gray-800"
                  htmlFor="fecha_fin"
               >
                  Fecha de Informe:{" "}
               </label>
               <input
                  id="fecha_fin"
                  type="date"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Fecha de Fin"
                  name="fecha_fin"

                  defaultValue={new Date().toISOString().substr(0, 10)}
               />

            </div>
         </div>




      </>
   );
};
export default FormularioBalance;

