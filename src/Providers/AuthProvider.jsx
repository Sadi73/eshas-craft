import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;