import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2whUUTh9SMYqISMHBD9AP-jA1nRkRKSrNg&usqp=CAU)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>
            <p className='journal__entry-content'>
                Algo de decorado para agregar aqui un poco de texto.
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>14</h4>
        </div>
    </div>
  )
}
