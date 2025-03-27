import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/header';
import { Content_Login } from './components/content_login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Content_Login/>
  </StrictMode>
);
