import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"

// tarea ASINCRONA
export const checkingAuthentication = ( email, password ) => {
  return async(dispatch) => {

    dispatch( checkingCredentials() );

  }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        console.log({result});

    }
}