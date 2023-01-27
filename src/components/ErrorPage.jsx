import { useRouteError } from "react-router-dom"

function Errorpage() {
    const error = useRouteError()
    console.log(error.message)
    return (
        
        <div>
            <h1>Gestión Pronaca</h1>
            <p>Hubo un error</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default Errorpage