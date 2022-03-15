import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
//import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

//APP PRINCIPAL
export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
        <Sidebar />

        {/* Contenido Principal */}
        <main>
            {/* <NothingSelected /> */}
            <NoteScreen />
        </main>
    </div>
  )
}


