import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)   
        })

        return () => {
           unsubscribe()
        }
    }, [])

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOutUser = () => {
        return signOut(auth)
    }

    const info = {
        user, location, createNewUser, LoginUser, LogOutUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;