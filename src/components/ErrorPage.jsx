import { useRouteError } from "react-router-dom"

function Errorpage() {
    const error = useRouteError()
    console.log(error.message)
    return (
        
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-black">
                Gestión Pronaca
            </h1>
            <p className="text-center">Hubo un error</p>
            <p>{error.statusText || error.message}</p>

        

        </div>
    )
}

export default Errorpage