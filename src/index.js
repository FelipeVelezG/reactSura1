import React from 'react';
import ReactDOM from 'react-dom/client';
import {Felipe} from './Componente/Felipe.js';
import {Menu} from './Componente/Menu/Menu.js';
import {Banner} from './Componente/Banner/Banner.js';
import { Sinopsis } from './Componente/Sinopsis/Sinopsis.js';
import { Footer } from './Componente/Footer/Footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Banner></Banner>
    <Sinopsis></Sinopsis>
    <Footer/>

  </React.StrictMode>
);


