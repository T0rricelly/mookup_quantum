import React from "react";
import HeaderHome from "./Header_home"; 
import Footer from "../components_auth/footer";
import "./../../styles/styles_home/table_employe.css";
import Menu from "./menu";

const Table_Employe = () => {
  return (
    <>
      <HeaderHome />
      <div className="container_table_employe">
        <Menu />
        <div className="container_main">
          <div className="container_contrat">
            <h2 className="contract">CONTRATO</h2>
            <button className="download_contrat">Descargar Contrato</button>
          </div>

          <div className="main-content">
            <div className="grid-table">
              <div className="grid-header">
                <div className="grid-cell">Fecha Inicio</div>
                <div className="grid-cell">Fecha Fin</div>
                <div className="grid-cell">Estado</div>
                <div className="grid-cell">Horario</div>
                <div className="grid-cell">Tipo de Contrato</div>
              </div>

              {[...Array(7)].map((_, index) => (
                <div className="grid-row" key={index}>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Table_Employe;
