import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            const userEmail = currentUser?.email || user?.email         
            const loggedUser = {email: userEmail}
            if(currentUser){
               axios.post('https://task-management-server-indol.vercel.app/jwt', loggedUser, {withCredentials: true})
               .then(res => console.log(res.data))
            } else {
               axios.post('https://task-management-server-indol.vercel.app/logout', loggedUser, {withCredentials: true})
               .then(res => console.log(res.data))
            }
        })

        return () => {
           unsubscribe()
        }
    }, [user])

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    const googleLogin = provider => {
        return signInWithPopup(auth, provider)
    }

    const LogOutUser = () => {
        return signOut(auth)
    }

    const info = {
        user, setUser, location, createNewUser, LoginUser, LogOutUser, loading, googleLogin
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;