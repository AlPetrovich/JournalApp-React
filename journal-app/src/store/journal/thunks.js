import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async(dispatch, getState)=>{
        //para grabar en firebase uso uid del usuario logueado
        dispatch( savingNewNote());
        const { uid } = getState().auth;

        const newNote ={
            title : '',
            body : '',
            date : new Date().getTime(),
        }

        //referencia a la coleccion donde quiero insertar la nueva nota
        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ));
        await setDoc( newDoc, newNote );
  
        newNote.id = newDoc.id;
    
        // dispatch 
        dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote(newNote));
        
    }
}