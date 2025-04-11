import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { New } from './components/components_auth/New';
import { Content_Login } from './components/components_auth/content_login';
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Forgot_Pasword } from './components/components_auth/Forgot_Pasword';
import { Restore } from './components/components_auth/Restore';
import Home from './components/components_home/Home';
import Calendarp from './components/components_calendar/Calendarp';
import { Formulario } from './components/components_home/Formulario';
import Cont_permisos from './components/components_permisos/cont_permisos';
import Employe from './components/Components_employe/Employe';
import Table_Employe from './components/components_home/table_employe';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={localStorage.getItem('logged') ? (<Home />) : (<Navigate to="/login" replace />)}/>
        <Route path="*" element={<Content_Login />} />
        <Route path="/login" element={<Content_Login />} />
        <Route path="/forgot" element={<Forgot_Pasword />} />
        <Route path="/restore" element={<Restore />} />
        <Route path="/new" element={<New />} />
        <Route path="/cuenta" element={<Formulario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/permisos" element={<Cont_permisos />} />
        <Route path="/assistance" element={<Calendarp />} />
        <Route path="/employe" element={<Employe />} />
        <Route path="/contrat" element={<Table_Employe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
