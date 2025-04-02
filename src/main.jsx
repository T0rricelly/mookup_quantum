import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components_login/Header_Login';
import { Footer } from './components_login/Footer';
import { New } from './components_login/New';
import { Content_Login } from './components_login/content_login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Forgot_Pasword } from './components_login/Forgot_Pasword';
import { Restore } from './components_login/Restore';
import  Inicio from './components_login/Home';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Content_Login/>} />
        <Route path="/login" element={<Content_Login/>} />
        <Route path="/forgot" element={<Forgot_Pasword/>} />
        <Route path="/restore" element={<Restore/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/" element={<Inicio/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
