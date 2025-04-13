import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Footer from "../components_auth/footer.jsx";
import Cont_home from "./cont_home.jsx";
import '../../styles/styles_home/Home.css';
import { BrowserRouter } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="contenedor">
        <aside className="MENU">
          <Menu />
        </aside>
        <main className="CONTENIDO">
        
        
        </main>
        </div>
      <Footer />
    </>
  );
};

export default Home;
