import React from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

  //Editar la nota seleccionada o activa y graba en firebase 
  //1-referencia a la nota activa
  const { active: note  } = useSelector(state => state.notes)
  const [formValues , handleInputChange ] = useForm( note ); 

  const { body, title } = formValues;

  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete='off' value={title} onChange={handleInputChange}/>
            <textarea placeholder='What happened today' className='notes__textarea' value={body} onChange={handleInputChange}></textarea>

            {
              (note.url)
              &&(
                <div className='notes__image'>
                  <img  
                      src='https://w0.peakpx.com/wallpaper/964/136/HD-wallpaper-little-falls-lakes-tourism-trees-waterfalls-turquoise-waterscapes-water-green-forests.jpg'
                      alt='imagen'
                  />
              </div>
              )
            }
        </div>

    </div>
  )
}
