import React from "react";
import "./../../styles/styles_home/table_employe.css";

const Table_Employe = () => {
  return (
    <>

      <section className="cont_permisos">
        <nav className="tiempo">
          <h1 className="titulo_ini">Contrato</h1>
          <article>
            <button className="btn_nuevo">
              Descargar contrato
            </button>
          </article>
        </nav>

        <section className="tabla_container">
          <table className="tabla">
            <thead>
              <tr>
                <th>Fecha inicio</th>
                <th>Fecha Fin</th>
                <th>Estado</th>
                <th>Horarios</th>
                <th>Tipo de contrato</th>
                <th>Valor</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> 09/04/2025</td>
                <td>10/04/2025</td>
                <td>Activo</td>
                <td>Diurno</td>
                <td>Fijo</td>
                <td>1 (SMLV)</td>
              </tr>
              <tr>
                <td> 09/04/2025</td>
                <td>10/04/2025</td>
                <td>Activo</td>
                <td>Diurno</td>
                <td>Fijo</td>
                <td>1 (SMLV)</td>
              </tr>
              <tr>
                <td> 09/04/2025</td>
                <td>10/04/2025</td>
                <td>Activo</td>
                <td>Diurno</td>
                <td>Fijo</td>
                <td>1 (SMLV)</td>
              </tr>
              <tr>
                <td> 09/04/2025</td>
                <td>10/04/2025</td>
                <td>Activo</td>
                <td>Diurno</td>
                <td>Fijo</td>
                <td>1 (SMLV)</td>
              </tr>
              <tr>
                <td> 09/04/2025</td>
                <td>10/04/2025</td>
                <td>Activo</td>
                <td>Diurno</td>
                <td>Fijo</td>
                <td>1 (SMLV)</td>
              </tr>


            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default Table_Employe;
