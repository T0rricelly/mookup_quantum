import "../../styles/styles_home/Cont_home.css";
import { useState, useEffect } from "react";
const name = 'Santiago'
export const Cont_home = () => {
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
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  const fechaText = fechaActual
    .toLocaleDateString('es-ES', opcionesFecha)
    .toUpperCase()
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
            <br /><br />
            <h3>{fechaText}</h3>
            <h4 id="hora">{horaActual}</h4>
          </p>
        </aside>
        <aside className="noti">
          <p>
            <h3 className="titu_noti">Notificaciones</h3>
          </p>
        </aside>
        </section>
        
        <section className="mid">
          <article  className="vaca">
            <p>
              <h3 className="titulos">Vacaciones</h3>
            </p>
          </article>
          <article className="tmp_tra">
            <p>
              <h3 className="titulos">Tiempo Trabajado</h3>
            </p>
          </article>
          <article className="asis">
            <p>
              <h3 className="titulos">Asistencia</h3>
            </p>
          </article>
          <article className="permi">
            <p>
              <h3 className="titulos">Permisos</h3>
            </p>
          </article>
        </section>
        <section className="rigth">
          <article className="tareas">
            <p>
              <h3 className="titulos">Tareas</h3>
            </p>
          </article>
          <article className="ausencias">
            <p>
              <h3 className="titulos">Ausencias</h3>
            </p>
          </article>
          <article className="contrato">
            <p>
              <h3 className="titulos">Contrato</h3>
            </p>
          </article>
          <article className="historial">
            <p>
              <h3 className="titulos">Historial</h3>
            </p>
          </article>
        </section>

      </section>

    </>
  );
};
export default Cont_home;
