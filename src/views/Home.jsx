import Menu from "./../components/menu/menu.jsx";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./../views/Empleado/home/cont_home.jsx";
import './Home.css';
import { Routes, Route } from "react-router-dom";
import Cont_permisos from '../components_permisos/cont_permisos';
import Calendarp from '../components_calendar/Calendarp';
import { Formulario } from './Formulario';
import Employe from '../Components_employe/Employe';
import Contrato  from '../../views/Empleado/contrato/contrat.jsx';
import Contratoj from './Jefe/contratoj/ContratoJefe.jsx';

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
            <Route path="contrat" element={<Contrato />} />
            <Route path="contratoJefe" element={<Contratoj />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
