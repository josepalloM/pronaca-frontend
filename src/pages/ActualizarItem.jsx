import {Form, useNavigate, useLoaderData} from 'react-router-dom'
import { obtenerItem } from "../data/items"
import FormularioItem from '../components/FormularioItem'

export async function loader({params}){
  const item = await obtenerItem(params.itemId)
  if(Object.values(item).length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'No hay ningun resultado'
    })
  }
  return item
}

export async function action(request, params){

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  //validaciones
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay erroes
  if(Object.keys(errores).length){
    return errores
  }

  //actualizar cliente
  await agregarItems(datos)
  console.log(datos)
  return redirect('/produccion')

}

function ActualizarItem(){
    const navigate = useNavigate();
    const item = useLoaderData();

  return(
    <>
        <h1>Actualizar Item</h1>
        <p>Puede modificar los datos un nuevo item</p>

        <div>
          <button
            onClick={()=> navigate(-1)}
          >Volver</button>
        </div>

        <div className="Contenedor-form">
          {/*errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)*/}

          <Form method="POST">
            <FormularioItem item={item}/>
            <input 
              type="submit"
              value="Registrar Item"  
            />
          </Form>
        </div>
    </>
  )
}

export default ActualizarItem