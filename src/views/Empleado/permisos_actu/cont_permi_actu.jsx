import { Link } from 'react-router-dom';
import "./permisos_actu.css";
const Permisos = () => {
    return (
        <section className="cont_permisos">
            <h2>Actualizar</h2>

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

            <nav className="btn_actu">
                <button id="actu_btn">ACTUALIZAR</button>
                <Link to="/home/permisos">
                    <button id="cancel">CANCELAR</button>
                </Link>
                <button className="btn_regis">REGISTROS</button>

            </nav>
        </section>
    );
};

export default Permisos;
