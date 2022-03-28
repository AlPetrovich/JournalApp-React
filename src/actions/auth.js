import { types } from "../types/types";
import  { firebase, googleAuthProvider } from '../firebase/firebaseConfig'; 
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";

//ASYNC -> regresa un callback
//action para logearse
export const startLoginEmailPassword=(email, password) =>{

    return( dispatch )=>{
        //ui
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            //userCredential
            .then(({ user })=>{
                dispatch( login( user.uid, user.displayName ));
                //ui
                dispatch( finishLoading() );
            })
            .catch( e =>{
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Fail', e.message, 'error');
            })
    }
}

//Action async con email pass name
export const startRegisterWithEmailPasswordName = (email, password, name ) =>{
    //donde tenga el usuario grabado ya realizo el dispatch
    return (dispatch) => {

        //DEVUELVE UN PROMISE userCredential - autentica inmediatamente crea el usuario
        firebase.auth().createUserWithEmailAndPassword( email, password )
            //userCredential
            .then( async({ user })=>{
                //Grabamos displayname en userCredential ya que viene null, seteamos el enviado por parametro
                await user.updateProfile({ displayName : name })
               
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch( e =>{
                console.log(e);
                Swal.fire('Fail', e.message, 'error');
            })
    }
}

//Accion de google
export const startGoogleLogin=()=>{
    return (dispatch) =>{

        firebase.auth().signInWithPopup( googleAuthProvider ) //retorna una promesa
            .then( ({ user })=>{ //user credential regresa un objeto con muchos datos acerca del usuario como el id y displayname
                dispatch(
                    login(user.uid, user.displayName) //id and name del usuario registrado con GOOGLE
                )
            })

    }
}

//-------Accion que regresa el siguiente objeto -------------------
export const login = (uid, displayName) => {
    return{
        type : types.login,
        payload:{
            uid,
            displayName
        }  
    }
}

//async porque disparo una instruccion de firebase que regresa una promesa
export const startLogout=()=>{

    return async( dispatch )=>{
        await firebase.auth().signOut();
        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

//accion que va a borrar el uid y el displayname del STORE
export const logout = () =>{
    return{
        type : types.logout  //restable el usuario a un obj vacio {}
    }
}