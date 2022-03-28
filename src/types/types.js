
//Tipo para reducer
export const types={

    //reducer auth Reducer

    login:'[Auth] Login',
    logout:'[Auth] Logout',

    //reducer ui Reducer
    uiSetError:'[UI] Set Error',
    uiRemoveError:'[UI] Remove Error',

    //bloqueo de boton login cuando autentica
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    //crear notas 
    notesAddNew : '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated : '[Notes] Updated note saved',
    notesFileUrl : '[Notes] Updated image url',
    notesDelete : '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',

}