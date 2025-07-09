import "./Cont_homej.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu_Jefe from "../../../components/menu_jefe/menu_jefe";

export const Cont_homej = () => {
  const name = 'Jefe';
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());
  const [fechaActual, setFechaActual] = useState(new Date());
  /*Fecha Actual*/
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  const opcionesFecha = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const fechaText = fechaActual
    .toLocaleDateString("es-ES", opcionesFecha)
    .toUpperCase();
  /*Hora Actual */
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <>
      {/*<section className="contenedor">
        <Menu_Jefe />*/}
        <section className="cont_home">
          <section className="asides">
            <aside className="saludo">
              <p>
                HOLA:
                <br />
                {name}
                <br />
                <br />
                !BIENVENID@!
                <nav className="fecha_hora">
                  <h3>{fechaText}</h3>
                  <h4 id="hora">{horaActual}</h4>
                </nav>
              </p>
            </aside>
            <aside className="noti">
              <h3 className="titu_noti">Notificaciones</h3>
            </aside>
          </section>

          <section className="mid">
            <article className="historial">
              <h3 className="titulos titulo_histo">Historial de Asistencia</h3>
            </article>
            <section className="sub_mid">
              <section className="sub_mid_left">
                <Link to="assistancejefe">
                  <article className="asis">
                    <h3 className="titulos">Asistencia Empleados</h3>
                  </article>
                </Link>

                <Link to="permisosjefe">
                  <article className="permi_emp">
                    <h3 className="titulos">Solicitudes Permisos</h3>
                  </article>
                </Link>
              </section>

              <section className="sub_mid_rigth">
                <article className="ausencias_emp">
                  <h3 className="titulos">Ausencias Empleados</h3>
                </article>
                <Link to="employejefe">
                  <article className="emp">
                    <h3 className="titulos">Empleados</h3>
                  </article>
                </Link>
                <Link to="permisosjefe/regis">
                  <article className="perm_regis_jefe">
                    <h3 className="titulos">Permisos Registrados</h3>
                  </article>
                </Link>
              </section>

            </section>
          </section>
        </section>
     {/*</section >*/}
    </>
  );
};
export default Cont_homej;
