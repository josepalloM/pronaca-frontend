const FormularioLogin = () => (
    <>    
        <div className="mb-4">
            <label
              className="flex justify-start text-gray-800"
              htmlFor="nombre"
            >Usuario: </label>
            <input
              id="nombre"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 uppercase"
              placeholder="Usuario"
              required
              autoComplete='off'
              name="nombre" />
            <label
              className="flex justify-start text-gray-800"
              htmlFor="cedula"
            >Contraseña </label>
            <input
              id="cedula"
              type="password"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Contraseña"
              name="cedula" />
          </div><br></br>
    </>
)

export default FormularioLogin