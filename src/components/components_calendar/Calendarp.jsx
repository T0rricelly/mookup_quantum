// src/components_home/Calendarp.jsx
import React from 'react';
import Menu from './../menu/menu';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/styles_calendar/Calendarp.css";

export const Calendarp = () => {
  return (
    <div className="contenedor">
      <Menu />

      <main className="main-content">
        {/* Primer bloque */}
        <section className='contenedor1'>
          <section className='AsistenciaCal'>
            <div><h1>ASISTENCIA</h1></div>
            <div><Calendar className="calendar-component" /></div>
          </section>

          <section className='RegistroAsis'>
            <div><h1 className='Registro_text'>REGISTRO DE ASISTENCIA</h1></div>
            <div>
              <section className='Contenedor_Ingreso'>
                <nav>
                  <p className='titus_calendar'>HORA INGRESO</p>
                  <input type='text' className='ingreso_hora' />
                </nav>
                <nav>
                  <p className='titus_calendar'>HORA SALIDA</p>
                  <input type='text' className='ingreso_hora' />
                </nav>

                <button className='Subir_ingreso'>SUBIR</button>
              </section>
            </div>
          </section>
          <section className='AsistenciaCal'>
            <div><h1>HISTORIAL DE ASISTENCIA</h1></div>
            <div>
              <section className='Contenedor_Ingreso'>
                <h1>AÚN NO HAY INFORMACIÓN.</h1>
              </section>
            </div>
          </section>

          <section className='RegistroAsis'>
            <div><h1 className='Registro_text'>RESUMEN DE ASISTENCIA</h1></div>
            <div>
              <section className='Contenedor_Ingreso'>
                <table className="tabla-resumen">
                  <thead>
                    <tr>
                      <th>LLEGADAS TARDE</th>
                      <th>INASISTENCIAS</th>
                      <th>DÍAS CON PERMISO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>1</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Calendarp;
