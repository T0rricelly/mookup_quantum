
import "./permisos.css";
import calendar from '../../../assets/icons/calendar.svg';
const Permisos = () => {
  return (
    <section className="cont_permisos">
      <h2>PERMISOS</h2>

      <section className="formulario">
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
              <img src={calendar} alt="" />
          </aside>
        </article>

        <article className="label">
          <label>FECHA INICIO</label>
          <aside className="fecha">
            <input type="date" placeholder="dd/mm/aaaa" />
              <img src={calendar} alt="" />
          </aside>
        </article>
      </section>

      <nav className="btn">
        <button>CREAR</button>
        <button>CANCELAR</button>
        <button>ACTUALIZAR</button>
        <button>REGISTROS</button>
      </nav>
    </section>
  );
};

export default Permisos;
