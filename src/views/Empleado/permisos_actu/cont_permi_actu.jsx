import { Link } from "react-router-dom";
import "./permisos_actu.css";
import Menu from "../../../components/menu/menu";
const Permisos_actu = () => {
  return (
    <>
      <section className="cont_permisos_actu">
        <h2>ACTUALIZAR PERMISOS</h2>

        <section className="formulario_permi">
          <article className="label_perm">
            <label>TIPO DE PERMISO</label>
            <select>
              <option>SELECCIONAR</option>
            </select>
          </article>

          <article className="label_perm">
            <label>COMPROBANTE</label>
            <div className="archivo_perm">
              <input type="file" id="file" />
            </div>
          </article>

          <article className="label_perm">
            <label>FECHA INICIO</label>
            <aside className="fecha_perm">
              <input type="date" placeholder="dd/mm/aaaa" />
            </aside>
          </article>

          <article className="label_perm">
            <label>FECHA INICIO</label>
            <aside className="fecha_perm">
              <input type="date" placeholder="dd/mm/aaaa" />
            </aside>
          </article>
        </section>

        <nav className="btn_actu">
          <button id="actu_btn">ACTUALIZAR</button>
          <Link to="/home/permisos">
            <button id="cancel">CANCELAR</button>
          </Link>
          <Link to="/home/permisos/regis" className="btn_regis">
            <button>REGISTROS</button>
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Permisos_actu;
