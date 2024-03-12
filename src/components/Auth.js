import React, { useContext, useState } from 'react'

const AuthContext = React.createContext(null)

export const Auth = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

  return (
    <div>
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => {
  return (
    useContext(
        AuthContext
    )
  )
}
