
import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Cont_home from "./cont_home.jsx";
import '../../styles/styles_home/Home.css'


export const Home = () => {
  return (
    <>
      <Header />

      <div className="contenedor">
          <aside className="MENU">
            <Menu />
          </aside>
          <section className="CONTENIDO">
            <Cont_home/>
          </section>
      </div>

      
    </>
  );
};
export default Home;
