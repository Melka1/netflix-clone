import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
    <>
        <FirebaseContext.Provider value={{firebase}}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>
)