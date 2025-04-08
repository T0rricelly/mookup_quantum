import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { New } from './components/components_auth/New';
import { Content_Login } from './components/components_auth/content_login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Forgot_Pasword } from './components/components_auth/Forgot_Pasword';
import { Restore } from './components/components_auth/Restore';
import  Home from './components/components_home/Home';
import { Formulario } from './components/components_home/formulario';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Content_Login/>} />
        <Route path="/login" element={<Content_Login/>} />
        <Route path="/forgot" element={<Forgot_Pasword/>} />
        <Route path="/restore" element={<Restore/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cuenta" element={<Formulario/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
