import { types } from "../types/types";


const initialState = {
    loading : false,
    msgError : null
}

//acciones creadas en ACTIONS -------

export const uiReducer = ( state = initialState, action ) =>{

    switch (action.type) {
        
        case types.uiSetError:
            return{
                ...state,
                msgError : action.payload //mensaje de error
            }

        case types.uiRemoveError:
            return{
                ...state,
                msgError:null
            } 
        
        case types.uiStartLoading:
            return{
                ...state,
                loading : true
            }
        case types.uiFinishLoading:
            return{
                ...state,
                loading:false
            }    

        default:
            return state;
    }
}