
import { Routes, Route } from "react-router-dom";
import Menu from "./../components/menu/menu.jsx";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./Empleado/home/cont_home.jsx";
import './Home.css';
import Calendarp from '../components/components_calendar/Calendarp.jsx';
import Cont_permisos from './Empleado/permisos/cont_permisos.jsx';
import Cont_permisos_actu from './Empleado/permisos_actu/cont_permi_actu.jsx';
import Cont_permisos_regis from './Empleado/permisos_regis/cont_permi_regis.jsx';
import { Formulario } from './Empleado/formulario/Formulario.jsx';
import Contrato  from './Empleado/contrato/contrat.jsx';
import Contratoj from './Jefe/contratoj/contratoJefe.jsx';

export const Home = () => {
  return (
    <>
      <Header />
      {/* <div className="contenedor"> */}
        {/*
        <aside className="MENU">
          <Menu />
        </aside>
        */}
        <main className="CONTENIDO">
          <Routes>
            <Route index element={<Cont_home />} />
            <Route path="permisos" element={<Cont_permisos />} />
            <Route path="permisos/actu" element={<Cont_permisos_actu />} />
            <Route path="permisos/regis" element={<Cont_permisos_regis/>} />
            <Route path="assistance" element={<Calendarp />} />
            <Route path="cuenta" element={<Formulario />} />
            <Route path="contrat" element={<Contrato />} />
            <Route path="contratoJefe" element={<Contratoj />} />
          </Routes>
        </main>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Home;
