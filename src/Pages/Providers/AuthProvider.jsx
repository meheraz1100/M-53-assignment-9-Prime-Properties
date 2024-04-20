import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [loading, setLoadding] = useState(true);

    const createUser = (email, password) => {
        setLoadding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoadding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
      return signInWithPopup(auth, githubProvider)
    }

    const profileUpdate = (name, photo_url) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo_url
      })
    } 


    const logOut = () => {
      setLoadding(true);
      return signOut(auth);
    } 

    // observe auth state changes
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current value of the current user: ', currentUser)
        setuser(currentUser);
        setLoadding(false);
      });
      return () => {
        unSubscribe();
      }
    }, [])

  const authInfo = { 
    user, 
    loading,
    createUser, 
    signInUser,
    logOut,
    googleLogin,
    githubLogin,
    profileUpdate
};

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

/**
 * 1. create Context and export it
 * 2. set Provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the authProvider component as children and use it in the middle of the auth provider
 */
