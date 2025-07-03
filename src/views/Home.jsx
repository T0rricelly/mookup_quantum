import Menu from "./../components/menu/menu.jsx";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./../views/Empleado/home/cont_home.jsx";
import './Home.css';
import { Routes, Route } from "react-router-dom";
import Calendarp from '../components_calendar/Calendarp';
<<<<<<< HEAD:src/components/components_home/Home.jsx
import Cont_permisos from '../../views/Empleado/permisos/cont_permisos.jsx';
import Cont_permisos_actu from '../../views/Empleado/permisos_actu/cont_permi_actu.jsx';
import Cont_permisos_regis from '../../views/Empleado/permisos_regis/cont_permi_regis.jsx';
import { Formulario } from '../../views/Empleado/formulario/Formulario.jsx';
import Employe from '../Components_employe/Employe';
import Table_Employe from './table_employe';
 
=======
import { Formulario } from './Formulario';
import Employe from '../Components_employe/Employe';
import Contrato  from '../../views/Empleado/contrato/contrat.jsx';
import Contratoj from './Jefe/contratoj/ContratoJefe.jsx';

>>>>>>> 6cd674b8c4b3a922f34e6c7388aca9c06224a59f:src/views/Home.jsx
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
            <Route path="permisos/regis" element={<Cont_permisos_regis />} />
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
