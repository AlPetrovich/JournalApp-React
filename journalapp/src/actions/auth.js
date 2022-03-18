import { types } from "../types/types";
import  { firebase, googleAuthProvider } from '../firebase/firebaseConfig'; 

//primera accion asincrona es decir regresa un callback----
export const startLoginEmailPassword=(email, password) =>{

    return( dispatch )=>{

        dispatch( login(123, 'Pedro')) //dispara accion login que se ejecuta en el store y modifica el state
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


//configurar firebase con google