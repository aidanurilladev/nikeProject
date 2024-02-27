import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const nav = useNavigate();
  const authGoogleProvider = new GoogleAuthProvider();

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, authGoogleProvider);
      nav("/");
    } catch (error) {
      alert(error.message);
    }
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      return dispatch({
        type: "CHECK_USER",
        payload: user,
      });
    });
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const values = {
    register,
    signInWithGoogle,
    user: state.user,
    logOut,
    logIn,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
