import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { New } from './components/New';
import { Content_Login } from './components/content_login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Forgot_Pasword } from './components/Forgot_Pasword';
import { Restore } from './components/Restore';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Content_Login/>} />
        <Route path="/login" element={<Content_Login/>} />
        <Route path="/forgot" element={<Forgot_Pasword/>} />
        <Route path="/restore" element={<Restore/>} />
        <Route path="/new" element={<New/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>
);
