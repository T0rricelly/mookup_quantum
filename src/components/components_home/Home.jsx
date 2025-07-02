import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Footer from "../components_auth/footer.jsx";
import Cont_home from "../../views/Empleado/home/cont_home.jsx";
import '../../styles/styles_home/Home.css';
import { Routes, Route } from "react-router-dom";
import Cont_permisos from '../components_permisos/cont_permisos';
import Calendarp from '../components_calendar/Calendarp';
import { Formulario } from '../../views/Empleado/formulario/Formulario.jsx';
import Employe from '../../views/Jefe/Admin_Empleado/Employe.jsx';
import Table_Employe from './table_employe';

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
