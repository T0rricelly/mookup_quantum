import { Link } from 'react-router-dom';
import "./permisos.css";
const Permisos = () => {
  return (
    <>
    <section className="cont_permisos">
      <h2>PERMISOS</h2>

      <section className="formulario_permi">
        <article className="label">
          <label>TIPO DE PERMISO</label>
          <select>
            <option>SELECCIONAR</option>
          </select>
        </article>

        <article className="label">
          <label>COMPROBANTE</label>
          <div className="archivo">
            <input type="file" id="file" />
          </div>
        </article>

        <article className="label">
          <label>FECHA INICIO</label>
          <aside className="fecha">
            <input type="date" placeholder="dd/mm/aaaa" />
          </aside>
        </article>

        <article className="label">
          <label>FECHA INICIO</label>
          <aside className="fecha">
            <input type="date" placeholder="dd/mm/aaaa" />
          </aside>
        </article>
      </section>

      <nav className="btn">
          <Link to="/home/permisos/actu">
            <button className="actu">ACTUALIZAR</button>
          </Link>
          <Link to="/home/permisos/regis">
            <button className="regis">REGISTROS</button>
          </Link>
          <button id="crear">CREAR</button>
          <Link to="/home">
            <button id="cancel">CANCELAR</button>
          </Link>
      </nav>
    </section>
    </>
  );
};

export default Permisos;
