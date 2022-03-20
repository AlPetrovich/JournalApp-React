import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";



//Tare async
export const startNewNote = ()=>{
    //getState tenemos acceso a T O D O el STATE similar a useSELECTOR //auth - notes - ui
    return async( dispatch, getState )=>{
        //para grabar en firestore necesito el uid del user
        const { uid } = getState().auth;
        //crear la nota que quiero grabar
        const newNote = {
            title : '',
            body: '',
            date: new Date().getTime()
        }
        //ref db - firestore
        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
        //cuando obtengo info del documento quiero activar la nota
        dispatch(activeNote( doc.id, newNote ))
    }
}

export const activeNote = (id, note)=>{
    return{
        type : types.notesActive,
        payload:{
            id,
            ...note
        }
    }
}

export const startLoadingNotes = (uid) =>{
    return async(dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const setNotes=( notes)=>{
    return{
        type: types.notesLoad,
        payload: notes
    }
}