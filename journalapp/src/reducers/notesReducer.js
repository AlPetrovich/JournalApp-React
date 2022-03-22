
//Como quiero que trabaje mi app o se encuentre mi STATE

import { types } from "../types/types";

/*{
    notes : [],
    active: null, //pantalla morada
    active:{
        id: 'KJLSADH2131',
        body: '',
        imageUrl:'',
        date:123456889
    }
}*/

const initialState ={
    notes: [],
    active: null
}

//REDUCER
export const notesReducer= (state = initialState, action)=>{
    
    switch (action.type) {
       
        case types.notesActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            
            return{
                ...state,
                notes: [ ...action.payload ] //establecer las notas en nuestro STORE
            }
            
        case types.notesUpdated:
            return{
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id ? action.payload.note : note
                )
            }
    
        default:
            return state;
    }
}