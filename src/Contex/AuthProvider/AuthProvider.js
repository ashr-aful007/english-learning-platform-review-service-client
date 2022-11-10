import React, { createContext, useContext, useEffect, useState } from 'react'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,
     signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config'

//context api
export const AuthContext = createContext()
const auth = getAuth(app)


function AuthProvider({children}) {
  
 //Hooks for user 
const [user, setUser] = useState({})
const [loading, setLoading] = useState(false)

//create user with email password
const createUser = (email,password) =>{
     setLoading(true)
  return createUserWithEmailAndPassword(auth,email, password)
}

//sign in with email password
const signIn = (email,password) =>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
}

//sign in with google
const signInwithgoogle = (Provider) =>{
     return signInWithPopup(auth, Provider)
}

//sign Out 
const logOut = () =>{
     signOut(auth)
}

//get User 
useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth,(currentuser) =>{
         setUser(currentuser)
         setLoading(false)
     })
     return () =>{
        return unsubscribe()
          
     }

},[])



const authInfo ={
     createUser,
     signIn,
     signInwithgoogle,
     user,
     setUser,
     logOut,
     loading,

}

  return (
    <div>
     <AuthContext.Provider value={authInfo}>
          {children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider