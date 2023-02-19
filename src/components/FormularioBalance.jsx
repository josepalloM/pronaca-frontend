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

       
  
      </>
    );
  };
export default FormularioBalance;

  