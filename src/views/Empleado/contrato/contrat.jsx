
import "./contrat.css";
import React from "react";
const Contrato = () => {
    return (
        <>
    
    <div className="container-contrato">
    <div className="campo-item">
        
        <label className="campo-label">SALARIO</label>
    <input className="campo-editor"></input>
    </div>

    <div className="container-descargar-contrato">
        <button className="boton-descargar">DESCARGAR<br />CONTRATO</button>
    </div>

    <div className="campo-item">
        <label className="campo-label">FECHA INICIO</label>
        <input className="campo-editor"></input>
    </div>

    <div className="campo-item">
        <label className="campo-label">FECHA FIN</label>
        <input className="campo-editor"></input>
    </div>

    <div className="campo-item">
        <label className="campo-label">ESTADO</label>
        <input className="campo-editor"></input>
    </div>

    <div className="campo-item">
        <label className="campo-label">HORARIO</label>
        <input className="campo-editor"></input>
    </div>

    <div className="campo-item "> 
        <label className="campo-label">TIPO DE CONTRATO</label>
        <input className="campo-editor"></input>
    </div>

    <div className="campo-item "> 
        <label className="campo-label">AREA</label>
        <input className="campo-editor"></input>
    </div>
    </div>

    </>
    );
}
export default Contrato;