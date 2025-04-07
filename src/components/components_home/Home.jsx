
import Menu from "./menu.jsx";
import Header from "./Header_home.jsx";
import Cont_home from "./cont_home.jsx";


export const Home = () => {
  return (
    <>
      <Header />
      <div className="contenedor">
          <aside>
            <Menu />
          </aside>
          <section>
            <Cont_home/>
          </section>
      </div>
      
    </>
  );
};
export default Home;
