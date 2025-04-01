import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/header';
import { Content_Login } from './components/content_login';
import { Footer } from './components/footer';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Forgot_Password } from './components/forgot_password';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Content_Login></Content_Login>} />   
        
        <Route path="/login" element={<Content_Login></Content_Login>} />
        <Route path="/forgot" element={<Forgot_Password></Forgot_Password>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>
);
