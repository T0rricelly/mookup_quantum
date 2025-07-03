import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Footer from "../components_auth/footer.jsx";
import Cont_home from "../../views/Empleado/home/cont_home.jsx";
import '../../styles/styles_home/Home.css';
import { Routes, Route } from "react-router-dom";
import Calendarp from '../components_calendar/Calendarp';
import Cont_permisos from '../../views/Empleado/permisos/cont_permisos.jsx';
import Cont_permisos_actu from '../../views/Empleado/permisos_actu/cont_permi_actu.jsx';
import { Formulario } from '../../views/Empleado/formulario/Formulario.jsx';
import Employe from '../Components_employe/Employe';
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
            <Route path="permisos/actu" element={<Cont_permisos_actu />} />
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
