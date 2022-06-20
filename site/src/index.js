import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Lp from './pages/Lp';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import Posts from './pages/Posts';
import Publicacao from './pages/Publicacao';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { cadastraPet } from './api/PostAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />} />
        <Route path='/LP' element = {<Lp />} />
        <Route path='/Login' element= {<Login />} />
        <Route path='/Cadastro' element= {<Cadastro />} />

        <Route path='/alterar/:idParam' element={<Cadastro/>}/>

        <Route path='/Feed' element= {<Feed />} />
        <Route path='/Posts' element= {<Posts />} />
        <Route path='/Publicacao' element= {<Publicacao />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


