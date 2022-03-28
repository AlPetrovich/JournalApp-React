import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

//Provider funciona igual que useContext, posee la info del STORE
export const JournalApp = () => {
    return (
      <Provider store= { store } >
        
        <AppRouter />

      </Provider>
    )
}
