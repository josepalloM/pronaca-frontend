import { createContext, useState} from 'react'

export const UserContext = createContext();

const UserProvider = (props) => {

    const [us, setUser] = useState("")

    return (
        <UserContext.Provider value={{us, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider