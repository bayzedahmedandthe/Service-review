import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.init";
import axios from "axios";

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);

            if(currentUser?.email){
                const user = {email: currentUser.email};
                axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                })
            }
            else{
                axios.post("http://localhost:5000/logout", {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                })
            }

            
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInformation = {
        createUser,
        loginUser,
        updateUserProfile,
        logOutUser,
        user, 
        setuser

    }
    return (

        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;