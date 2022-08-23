import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: { 
      isSaving: true,
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
       addNewEmptyNote: (state, action) => {

       },
         setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

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
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setIsSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;