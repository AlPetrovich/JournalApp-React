import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async(dispatch, getState)=>{
        //para grabar en firebase uso uid del usuario logueado
        const { uid } = getState().auth;

        const newNote ={
            title : '',
            body : '',
            date : new Date().getTime(),
        }

        //referencia a la coleccion donde quiero insertar la nueva nota
        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ));
        await setDoc( newDoc, newNote );
  
        
    
        // dispatch 
        //dispatch( newNote )
        //dispatch( activeNote )
    }
}