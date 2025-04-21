import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Footer from "../components_auth/footer.jsx";
import Cont_home from "./cont_home.jsx";
import Cont_permisos from "../components_permisos/cont_permisos.jsx";
import Calendarp from "../components_calendar/Calendarp.jsx";
import Table_Employe from "../Components_employe/Employe.jsx";
import Employe from "../components_contract/table_employe.jsx";
import '../../styles/styles_home/Home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="contenedor">
        <aside className="MENU">
          <Menu />
        </aside>
        <main className="CONTENIDO">
           <Routes>
              <Route path="/home" element={<Cont_home/>}/>
              <Route path="/permisos" element={<Cont_permisos />} />
              <Route path="/assistance" element={<Calendarp />} />
              <Route path="/contrat" element={<Table_Employe />} />
              <Route path="/employe" element={<Employe />} />
            </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
