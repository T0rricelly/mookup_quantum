import Menu from "./../components/menu/menu.jsx";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./../views/Empleado/home/cont_home.jsx";
import './Home.css';
import { Routes, Route } from "react-router-dom";
import Cont_permisos from '../components/components_permisos/cont_permisos.jsx';
import Calendarp from '../components/components_calendar/Calendarp.jsx';
import { Formulario } from './Empleado/formulario/Formulario.jsx';
import Employe from '../components/Components_employe/Employe.jsx';
import Table_Employe from '../components/components_home/table_employe.jsx';

export const Home = () => {
  return (
    <>
      <Header />
      <div className="contenedor">
        {
        <aside className="MENU">
          <Menu />
        </aside>
        }
        <main className="CONTENIDO">
          <Routes>
            <Route index element={<Cont_home />} />
            <Route path="permisos" element={<Cont_permisos />} />
            <Route path="assistance" element={<Calendarp />} />
            <Route path="cuenta" element={<Formulario />} />
            <Route path="employe" element={<Employe />} />
            <Route path="contrat" element={<Table_Employe />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
