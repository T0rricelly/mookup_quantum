import { StrictMode } from 'react';
import { Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { New } from './views/Empleado/auth/new/New';
import { Content_Login } from './views/Empleado/auth/login/content_login';
import { Forgot_Pasword } from './views/Empleado/auth/forgot/Forgot_Pasword';
import { Restore } from './views/Empleado/auth/new/Restore';
import { Home } from './views/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Content_Login />} />
        <Route path="/forgot" element={<Forgot_Pasword />} />
        <Route path="/restore" element={<Restore />} />
        <Route path="/new" element={<New />} />
        <Route 
          path="/home/*" 
          element={
            localStorage.getItem('logged') === 'true' ? (
              <Home />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
