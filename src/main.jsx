import { StrictMode } from 'react';
import { Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { New } from './views/auth/new/New';
import { Content_Login } from './views/auth/login/content_login';
import { Forgot_Pasword } from './views/auth/forgot/Forgot_Pasword';
import { Restore } from './views/auth/restore/Restore';
import { Home } from './views/Home';
import './main.css'
import { Protected_Routes } from './components/Protected_Routes/Protected_Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Content_Login/>} />
        <Route path="/forgot" element={<Forgot_Pasword />} />
        <Route path="/restore" element={<Restore />} />
        <Route path="/new" element={<New />} />
        <Route
          path="/home/*"
          element={
            localStorage.getItem('logged') === 'true' ? (
              <Protected_Routes role = {localStorage.getItem('rol')}>
                <Home userRol = {localStorage.getItem('rol')}/>
              </Protected_Routes>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
