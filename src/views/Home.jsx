import { Routes, Route } from "react-router-dom";
import Header from "./../components/header/Header_home.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Cont_home from "./Empleado/home/cont_home.jsx";
import './Home.css';
import AsistenciaEm from './Empleado/asistencia/AsistenciaEm.jsx';
import Cont_permisos from './Empleado/permisos/cont_permisos.jsx';
import Cont_permisos_actu from './Empleado/permisos_actu/cont_permi_actu.jsx';
import Cont_permisos_regis from './Empleado/permisos_regis/cont_permi_regis.jsx';
import Formulario from './Empleado/formulario/Formulario.jsx';
import Contrato from './Empleado/contrato/contrat.jsx';
import Contratoj from './Jefe/contratoj/ContratoJefe.jsx';
//import Tyc from './Empleado/tyc/tyc.jsx'
import AsistenciaJefe from './Jefe/AsistenciaJefe/AsistenciaJefe.jsx';
import Menu from "../components/menu/menu.jsx";
import Menu_Jefe from "../components/menu_jefe/menu_jefe.jsx";
import Cont_homejefe from "./Jefe/home/cont_homej.jsx";
import Cont_permisosjefe from "./Jefe/Permisos_emp/cont_perm_emp.jsx";
import Cont_permisos_regisjefe from "./Jefe/Permisos_regis_emp/cont_perm_regis_emp.jsx";
import Formulario_jefe from "./Jefe/Cuenta/Cuenta_JEFE.jsx";
//import Contratojefe from "./Jefe/contratoj/ContratoJefe.jsx";
import Formulario_empjefe from "./Jefe/Admin_Empleado/Employe.jsx";
import Form_anadir_emp from './Jefe/Anadir_Empleado/Anadir_empleado.jsx';
import Form_elim_emp from './Jefe/Eliminar_Empleado/Eliminar_empleado.jsx'
import Form_busc_emp from './Jefe/Buscar_Empleado/Buscar_E.jsx'
import Form_actu_emp from './Jefe/Actualizar_empleado/Actualizar_empleado.jsx'

export const Home = ({ userRol }) => {
  return (
    <>
      <Header userRol={userRol} />
      <section className="contenedor">
        <Menu />
        <main className="CONTENIDO">
          <Routes>
            <Route
              index
              element={<Cont_home userRol={localStorage.getItem("rol")} />}
            />
            <Route path="permisos">
              <Route index element={<Cont_permisos />} />
              <Route path="actu" element={<Cont_permisos_actu />} />
              <Route path="regis" element={<Cont_permisos_regis />} />
            </Route>
            <Route path="assistance" element={<AsistenciaEm />} />
            <Route path="cuenta" element={<Formulario />} />
            <Route path="contrat" element={<Contrato />} />
            {/*<Route path="tyc" element={<Tyc />} />*/}
            <Route path="homejefe" element={<Cont_homejefe />} />
              <Route path="permisosjefe">
                <Route index element={<Cont_permisosjefe />} />
                <Route path="regis" element={<Cont_permisos_regisjefe />} />
              </Route>
              <Route path="assistancejefe" element={<AsistenciaJefe />} />
              {/*<Route path="regis_jefe" element={<Contratojefe />} />*/}
              <Route path="employejefe" >
                <Route index element={<Formulario_empjefe />} />
                <Route path="anadir" element={<Form_anadir_emp />} />
                <Route path="eliminar" element={<Form_elim_emp />} />
                <Route path="buscar" element={<Form_busc_emp />} />
                <Route path="actu" element={<Form_actu_emp />} />
              </Route>
              <Route path="jefe" element={<Formulario_jefe />} />

          </Routes>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Home;
