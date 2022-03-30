//Action
import { db } from "../firebase/firebaseConfig"

export const loadNotes = async ( uid ) =>{
    //indicar path de la collecion, para obtener la info uso get
   const notesSnap =  await db.collection(`${uid}/journal/notes`).get();
   const notes = [];

   notesSnap.forEach( snapHijo =>{
       notes.push({
           id: snapHijo.id,
           ...snapHijo.data()
          /*  //notes -> {id,body,date,title} */
       })
   });

   
   return notes;
}