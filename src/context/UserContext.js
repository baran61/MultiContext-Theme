import {createContext, useContext, useState} from 'react'

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const[user,setUser] = useState(null)
    
    const values = {user,setUser} //Deger olarak kullanılacak verileri gönderiyoruz (Projile.js 'de kullanılıyor !)

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)