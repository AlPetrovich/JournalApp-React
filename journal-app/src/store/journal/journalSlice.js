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
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setIsSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

// acciones para caer dentro de nuestro reducer
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setIsSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;