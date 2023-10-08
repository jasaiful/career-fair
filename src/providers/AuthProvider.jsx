import { createContext } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const AuthInfo = {
        googleSignIn,
    }

    return (
        <AuthContext.Provider
            value={AuthInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;