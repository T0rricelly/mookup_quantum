import "../../styles/styles_home/Cont_home.css";
import { useState, useEffect } from "react";
export const Cont_home = () => {
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <>
      <section className="cont_home">
        <nav className="tiempo">
          <h1 className="titulo_ini">INICIO</h1>
          <article>
            <h3>Hora</h3>
            <h4 id="hora">{horaActual}</h4>
          </article>

        </nav>
        <article className="saludo">
          <p>Hola</p>
        </article>
        <section className="tabla_container">
          <table className="tabla">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Fecha de Inicio</th>
                <th>Fecha Fin</th>
                <th>Area</th>
                <th>Estado</th>
                <th>Num.Doc</th>
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
                <td> empleado</td>
                <td>10/04/2025</td>
                <td>10/10/2026</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> empleado</td>
                <td>10/04/2025</td>
                <td>10/10/2026</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> empleado</td>
                <td>10/04/2025</td>
                <td>10/10/2026</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> empleado</td>
                <td>10/04/2025</td>
                <td>10/10/2026</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> empleado</td>
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

    </>
  );
};
export default Cont_home;
