import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  //extraer la nota activa para guardarla
  const {active}= useSelector( state => state.notes)

  const handleSave = ()=>{
    dispatch( startSaveNote( active ) )
  }

  //Referencia para el input. Se crea el componente
  const inputArchivo = useRef(null);

  const handlePictureClick = () =>{
    inputArchivo.current.click();
  }

  

  const handleFileChange = (e) =>{
    //obtener los archivos seleccionados - en este caso 1 solo
    const file = e.target.files[0];
    if( file ){
       dispatch( startUploading( file ) );
    }
  }

  return (
    <div className='notes__appbar'>
        <span>15 de marzo 2022</span>

        <input ref={inputArchivo} name="file"  type="file" style={{display : 'none'}} onChange={ handleFileChange } />
        <div>
            <button className='btn' onClick={ handlePictureClick }>
                Picture
            </button>

            <button className='btn' onClick={handleSave}>
                Save
            </button>

        </div>
    </div>
  )
}
