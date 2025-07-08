
import { Routes, Route } from "react-router-dom";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./Empleado/home/cont_home.jsx";
import './Home.css';
import AsistenciaEm from './Empleado/asistencia/AsistenciaEm.jsx';
import Cont_permisos from './Empleado/permisos/cont_permisos.jsx';
import Cont_permisos_actu from './Empleado/permisos_actu/cont_permi_actu.jsx';
import Cont_permisos_regis from './Empleado/permisos_regis/cont_permi_regis.jsx';
// import { Formulario } from './Empleado/formulario/Formulario.jsx';
import Contrato from './Empleado/contrato/contrat.jsx';
import Contratoj from './Jefe/contratoj/ContratoJefe.jsx';
import AsistenciaJefe from './Jefe/AsistenciaJefe/AsistenciaJefe.jsx';
import Formulario from "./Jefe/formulario_JEFE/Formulario_JEFE.jsx";
import Menu from "../components/menu/menu.jsx";

export const Home = ({ userRol }) => {
  return (
    <>
      <Header userRol={userRol} />
      <section className="contenedor">
      <Menu />
        <main className="CONTENIDO">
          <Routes>
            <Route index element={<Cont_home userRol = {localStorage.getItem('rol')}/>} />
            <Route path="permisos" element={<Cont_permisos />} />
            <Route path="permisos/actu" element={<Cont_permisos_actu />} />
            <Route path="permisos/regis" element={<Cont_permisos_regis />} />
            <Route path="assistance" element={<AsistenciaEm />} />
            <Route path="cuenta" element={<Formulario />} />
            <Route path="contrat" element={<Contrato />} />
            <Route path="contratoJefe" element={<Contratoj />} />
            <Route path="assistancejef" element={<AsistenciaJefe />} />
            <Route path="employejefe" element={<Formulario />}></Route>
          </Routes>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Home;
