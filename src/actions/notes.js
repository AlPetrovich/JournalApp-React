import Swal from 'sweetalert2';
import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';


//react-journal

//Tare async
export const startNewNote = ()=>{
    //getState tenemos acceso a T O D O el STATE similar a useSELECTOR //auth - notes - ui
    return async( dispatch, getState )=>{
       /*  //para grabar en firestore necesito el uid del user */
        const { uid } = getState().auth;
       /*  //crear la nota que quiero grabar */
        const newNote = {
            title : '',
            body: '',
            date: new Date().getTime()
        }
       /*  //ref db - firestore */
        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
       /*  //cuando obtengo info del documento quiero activar la nota */
        dispatch(activeNote( doc.id, newNote ))
       /*  //renderiza nota nueva en pantalla */
        dispatch( addNewNote(doc.id, newNote ))
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

/* //accion para que inmediatamente creo la nota, aparezca en pantalla  */
export const addNewNote=( id, note ) =>{
    return{
        type : types.notesAddNew,
        payload: {
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

//accion para grabar en la base de datos
export const startSaveNote =( note ) =>{

    return async( dispatch, getState)=>{

        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url; /* //si no viene la nota borro la url */
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        //se graba en firestore
        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, note ));
        Swal.fire('Saved', note.title, 'success')

    }
}

//accion que unicamente actualice del store, la nota que cambia, sincrona porque toda la info esta en local
//id de la nota a hacer refresh
export const refreshNote = ( id, note)=>{
    return{
        type : types.notesUpdated,
        payload:{
            id,
            note:{
                id,
                ...note
            }
        }
    }
}

//async
export const startUploading= ( file )=>{

    return async( dispatch, getState ) => {
        //referencia a la nota activa
        const { active:activeNote } = getState().notes;

        Swal.fire({
            title:'Uploading...',
            text:'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote) )
        Swal.close();
    }
}

//ACCION DE BORRAR

export const starDeleting = ( id ) =>{

    return async(dispatch , getState)=>{

        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${ id }`).delete();

        dispatch( deleteNote(id) );
    }
}

//Accion que va a modificar mi store
export const deleteNote = (id) =>{
    return {
        type: types.notesDelete,
        payload: id
    }
}

//accion de logout 
export const noteLogout = () =>{
    return{
        type: types.notesLogoutCleaning
    }
};