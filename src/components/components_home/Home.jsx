import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Footer from "../components_auth/footer.jsx";
import Cont_home from "./cont_home.jsx";
import Permisos from "../components_permisos/cont_permisos.jsx";
/*import Empleados from "./Empleados.jsx";*/
import { Routes, Route } from "react-router-dom";
import '../../styles/styles_home/Home.css';

export const Home = () => {
  return (
    <>
      <Header />
      <div className="contenedor">
        <aside className="MENU">
          <Menu />
        </aside>
        <section className="CONTENIDO">
         <Permisos/>
          {/*<Routes>
            <Route path="/home" element={<Cont_home />} />
            <Route path="/permisos" element={<Permisos />} />
            {/*<Route path="/asistencia" element={<Empleados />} />
            <Route path="/contrato" element={<Empleados />} />
            <Route path="/empleados" element={<Empleados />*
          </Routes>*/ }

          
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
