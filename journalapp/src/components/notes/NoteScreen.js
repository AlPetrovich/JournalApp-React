import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  //Editar la nota seleccionada o activa y graba en firebase 
  //1-referencia a la nota activa
  const { active: note  } = useSelector(state => state.notes)
  const [formValues , handleInputChange, reset ] = useForm( note ); 
  const { body, title } = formValues;

  //Dejar la nota seleccionada
  //disparo la accion SOLO si el id es diferente
  const activeId = useRef( note.id );
  useEffect(() => {
    //Solo se dispara si la nota id cambio
    if( note.id !== activeId.current ){
      reset( note );
      activeId.current = note.id //si la nota cambio tengo que reestablecerla
    }
  }, [note, reset])
  
  useEffect(() => {
    
    //dispatch para actualizar la nota activa
    dispatch(activeNote(formValues.id, {...formValues}))
   
  }, [formValues, dispatch])
  

  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input 
            type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete='off' value={title} onChange={handleInputChange} name="title"/>
            <textarea 
            placeholder='What happened today' className='notes__textarea' value={body} onChange={handleInputChange} name="body"></textarea>

            {
              (note.url)
              &&(
                <div className='notes__image'>
                  <img  
                      src={ note.url }
                      alt='imagen'
                  />
              </div>
              )
            }
        </div>

    </div>
  )
}
