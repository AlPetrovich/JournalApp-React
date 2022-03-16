import { types } from "../types/types"


//primera accion asincrona es decir regresa un callback----
export const startLoginEmailPassword=(email, password) =>{

    return( dispatch )=>{

        dispatch( login(123, 'Pedro')) //dispara accion login que se ejecuta en el store y modifica el state
    }
}

//-------Accion que regresa el siguiente objeto -------------------
export const login = (uid, displayName) => {
    return{
        type : types.login,
        payload:{
            uid,
            displayName
        }  
    }
}


//configurar firebase con google