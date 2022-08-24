import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setIsSaving, setNotes, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

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

//cargar las notas del usuario logueado
export const startLoadingNotes = () => {

    return async( dispatch, getState ) =>{

        const { uid } = getState().auth;
        if( !uid ) throw new Error('No hay usuario logueado'); //nunca debemos tener este error

        const notesData = await loadNotes( uid );

        dispatch( setNotes(notesData) );
    }

}

export const startSaveNote = () => {
    return async(dispatch, getState)=>{

        dispatch( setIsSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote(note) );
    }
}