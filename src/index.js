import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Color } from './contexts/Colors';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Color.Provider value={{color:'blue'}}>
    <App></App>
</Color.Provider>
</>
);

reportWebVitals();
