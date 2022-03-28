import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

//APP PRINCIPAL
export const JournalScreen = () => {

  const { active } = useSelector( state => state.notes);

  return (
    <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
        <Sidebar />

        {/* Contenido Principal si tenemos nota muestra NoteScreen */}
        <main>
            {
              ( active )
              ? ( <NoteScreen />)
              : (<NothingSelected />)
            }
      
        </main>
    </div>
  )
}


