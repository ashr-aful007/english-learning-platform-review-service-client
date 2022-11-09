import React, { createContext, useContext, useState } from 'react'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import app from '../../Firebase/Firebase.config'
//context api
export const AuthContext = createContext()
const auth = getAuth(app)


function AuthProvider({children}) {
  
 //Hooks for user 
const [user, setUser] = useState('')


//create user with email password
const createUser = (email,password) =>{
  return createUserWithEmailAndPassword(auth,email, password)
}

//sign in with email password
const signIn = (email,password) =>{
     return signInWithEmailAndPassword(auth, email, password)
}

//sign in with google
const signInwithgoogle = (Provider) =>{
     return signInWithPopup(auth, Provider)
}

const authInfo ={
     createUser,
     signIn,
     signInwithgoogle,
     user,
     setUser,

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