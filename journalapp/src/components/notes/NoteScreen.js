import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete='off'/>
            <textarea placeholder='What happened today' className='notes__textarea'></textarea>

            <div className='notes__image'>
                <img  
                    src='https://w0.peakpx.com/wallpaper/964/136/HD-wallpaper-little-falls-lakes-tourism-trees-waterfalls-turquoise-waterscapes-water-green-forests.jpg'
                    alt='imagen'
                />
            </div>
        </div>

    </div>
  )
}
