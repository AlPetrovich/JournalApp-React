import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setIsSaving, setNotes, setPhotosToActiveNote, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

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

export const startUploadingFiles = (files = [] ) => {
    return async (dispatch, getState) => {
        //bloquear botones y poner app en estado de carga
        dispatch( setIsSaving() );
        
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        
        dispatch( setPhotosToActiveNote(photosUrls) );

    }
}


export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );

    }
}