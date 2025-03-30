import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/header';
import { Content_Login } from './components/content_login';
import { Footer } from './components/footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Content_Login/>
    <Footer/>
  </StrictMode>
);
