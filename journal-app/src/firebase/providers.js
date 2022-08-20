// proveedores de autenticacion
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result ); obtener credenciales
        const user = result.user;
        const { displayName, email, photoURL, uid } = user;
        
        return{
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        return{
            ok: false,
            errorMessage
        }
    }
}

//registrando usuario
export const registerUserWithEmailPassword= async({email, password, displayName})=>{
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // TODO: actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return{ 
            ok : true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return { ok : false, errorMessage : error.message }
    }
}

//login con email y password
export const loginWithEmailPassword = async({ email, password })=>{
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return{
            ok : true,
            uid, photoURL, displayName, email
        }

    } catch (error) {
        return { ok : false, errorMessage : error.message }
    }
}