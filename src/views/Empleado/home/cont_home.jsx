import "./Cont_home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { handleData } from "../auth/login/content_login";
export const Cont_homeJefe = ({userRol}) => {
  // const name = handleData().name;
  const name = userRol
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
                <Link to="/home/assistance">
                  <article className="asis">
                    <h3 className="titulos">Asistencia</h3>
                  </article>
                </Link>

                <Link to="/home/permisos">
                  <article className="permi">
                    <h3 className="titulos">Permisos</h3>
                  </article>
                </Link>
              </section>
              <section className="sub_mid_rigth">
                <article className="ausencias">
                  <h3 className="titulos">Ausencias</h3>
                </article>
                <Link to="/home/contrat">
                  <article className="contrato">
                    <h3 className="titulos">Contrato</h3>
                  </article>
                </Link>
                <article className="tmp_tra">
                  <h3 className="titulos">Tiempo Trabajado</h3>
                </article>
              </section>

            </section>
          </section>
        </section>
    </>
  );
};
export default Cont_homeJefe;
