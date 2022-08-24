import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: { 
      isSaving: false,
      messageSave: '',
      notes: [],
      active: null,
    //   activeNote: {
    //         id: 'ABC1234',
    //         title: '',
    //         body: '',
    //         date: 1234567,
    //         imageUrls: [], //https://foto1.jpg, https://foto2.jpg 
    //   }
   },
   reducers: {
       savingNewNote: ( state ) =>{
            state.isSaving = true;
      },
       addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
       },
         setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSave = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setIsSaving: (state) => {
            state.isSaving = true;
            state.messageSave = '';
        },
        updateNote: (state, action) => { //payload es una nota o nota actualizada
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            } );
            // Mostrar mensaje de actualizacion
            state.messageSave = `${ action.payload.title } actualizado correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            //preservo imagenes anteriores y hago append de nuevas
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSave = '',
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter( note => note.id !== action.payload );
            state.isSaving = false;
            state.messageSave = '';
        }
    }
});

// acciones para caer dentro de nuestro reducer
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setIsSaving,
    updateNote,
    deleteNoteById,
    clearNotesLogout
} = journalSlice.actions;