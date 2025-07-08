import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)
//this wrap your app and provide authentication state to all children
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null) // to store the user state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     // Runs when component mounts
    const unsubscribe = onAuthStateChanged(auth,(firebaseUser) => {
        // Listens for changes in authentication state (login/logout)
        setUser(firebaseUser)
        setLoading(false)
    } )
    return () => unsubscribe()
    //cleans up when the component unmounts
  }, [])

  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{user, logout,}}>
     {/* Provides the user and logout function to all children components */}  
    {!loading && children}
    </AuthContext.Provider>
  )
}
