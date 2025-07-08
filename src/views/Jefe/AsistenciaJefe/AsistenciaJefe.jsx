import React from 'react';
import Menu from '../../../components/menu/menu';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./AsistenciaJefe.css";

export const AsistenciaJefe = () => {
  return (

      <main className="main-content">
        {/* Primer bloque */}
        <div className='contenedor1_jef'>
          <section className='AsistenciaCal_jef'>
            <div><h1>ASISTENCIA</h1></div>
            <div><Calendar className="calendar-component" /></div>
          </section>

          <section className='RegistroAsis_jef'>
            <div><h1 className='Registro_text_jef'>CONSULTAR ASISTENCIA</h1></div>
            <div>
              <section className='Contenedor_Ingreso_jef'>
                <div>
                  <p className='titus_calendar_jef'>NOMBRE DEL EMPLEADO</p>
                  <input type='text' className='ingreso_hora_jef' />
                </div>
                <div>
                  <p className='titus_calendar_jef'>NUMERO DE DOCUMENTO</p>
                  <input type='text' className='ingreso_hora_jef' />
                </div>

                <button className='Subir_ingreso_jef'>CONSULTAR</button>
              </section>
            </div>
          </section>
         
          <section className='AsistenciaCal_jef historial-jef'>
            <div><h1>HISTORIAL DE ASISTENCIA</h1></div>
            <div>
              <section className='Contenedor_Historial_jef'>
                <h1>AÚN NO HAY INFORMACIÓN.</h1>
              </section>
            </div>
          </section>
        
        </div>
      </main>
  );
};

export default AsistenciaJefe;