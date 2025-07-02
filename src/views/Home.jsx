import Menu from "./../components/menu/menu.jsx";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./../views/Empleado/home/cont_home.jsx";
import './Home.css';
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD:src/components/components_home/Home.jsx
import Cont_permisos from '../components_permisos/cont_permisos';
import Calendarp from '../components_calendar/Calendarp';
import { Formulario } from './Formulario';
import Employe from '../Components_employe/Employe';
=======
import Cont_permisos from '../components/components_permisos/cont_permisos.jsx';
import Calendarp from '../components/components_calendar/Calendarp.jsx';
import { Formulario } from './Empleado/formulario/Formulario.jsx';
import Employe from '../components/Components_employe/Employe.jsx';
import Table_Employe from '../components/components_home/table_employe.jsx';
>>>>>>> 97fc36a356ff73365e123987cb0c544fe5843f71:src/views/Home.jsx

import Contrato  from '../../views/Empleado/contrato/contrat.jsx';
import Contratoj from '../../views/Jefe/contratoj/ContratoJefe.jsx'; // Asegúrate que coincida con el nuevo nombre del archivo
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
