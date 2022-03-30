import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  //verifica el estado de firebase si esta autenticado o no
  const [cheking, setCheking] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //pendientes a la autenticacion -> mantener el user en el store
  useEffect(() => {
   //crea un observable -> objeto especial que se puede disparar mas de una vez
   //estamos pendiente de la autenticacion
   firebase.auth().onAuthStateChanged( async(user)=>{ //uid displayname email
      //si el objeto user tiene algo entonces pregunta si tiene uid, si es null sale de la condicion
      if( user?.uid ){
        dispatch( login( user.uid, user.displayName) );
        setIsLoggedIn( true );
        dispatch( startLoadingNotes( user.uid )); //setea notas y las va cargando - notes
      }else{
        setIsLoggedIn( false );
      }

      setCheking(false); 

   });

  }, [ dispatch, setCheking, setIsLoggedIn ]);
  
  if( cheking ){
    return(
      //agregar un componente de espera 
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
        <div>
            <Switch>

                <PublicRoute  path="/auth" isAuthenticated={ isLoggedIn } component={ AuthRouter }></PublicRoute>

                <PrivateRoute exact  path="/" isAuthenticated={ isLoggedIn } component={ JournalScreen }></PrivateRoute>

                <Redirect to="/auth/login"></Redirect>
            </Switch>
        </div> 
    </Router>
   
  )
}
