import { useState } from "react";
import "../../styles/styles_permisos/Cont_permisos.css";
import Header from "../components_home/Header_home";
import Footer from "../components_auth/footer";
import Menu from "../components_home/menu";

export const Cont_permisos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      <Header />
      <div className="contenedor">
        <aside className="MENU">
          <Menu />
        </aside>
        <div className="CONTENIDO">

          <section className="cont_permisos">
            <nav className="tiempo">
              <h1 className="titulo_ini">Permisos</h1>
              <article>
                <button className="btn_nuevo" onClick={abrirModal}>
                  NUEVO+
                </button>
              </article>
            </nav>

            <section className="tabla_container">
              <table className="tabla">
                <thead>
                  <tr>
                    <th>Tipo de Permiso</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha Fin</th>
                    <th>Dias</th>
                    <th>Comprobante</th>
                    <th>Estado</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> empleado</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vacaciones</td>
                    <td>10/04/2025</td>
                    <td>10/10/2026</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </div>
      <Footer />

      {mostrarModal && (
        <div className="modal_fondo">
          <div className="modal_formulario">
            <h2 className="modal_titulo">NUEVO PERMISO</h2>
            <div className="modal_grid">
              <div className="campo">
                <label>TIPO DE PERMISO</label>
                <input type="text" placeholder="Ej. Vacaciones" />
              </div>

              <div className="campo">
                <label>FECHA</label>
                <input type="date" />
              </div>

              <div className="campo">
                <label>DIAS</label>
                <input type="number" placeholder="Ej. 5" />
              </div>

              <div className="campo">
                <label>COMPROBANTE</label>
                <div className="comprobante_input">
                  <input type="file" />
                  <span className="icono_subida">⬆</span>
                </div>
              </div>
            </div>

            <div className="modal_botones">
              <button className="btn_cancelar" onClick={cerrarModal}>CANCELAR</button>
              <button className="btn_crear">CREAR</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cont_permisos;
