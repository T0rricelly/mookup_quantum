import React from 'react'
import Header from '../components_home/Header_home.jsx'
import Footer from '../components_auth/footer.jsx'
import Menu from '../components_home/menu.jsx'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/styles_calendar/Calendarp.css";



export const Calendarp = () => {
    return (
        <>
            <section className='contenedor1'>
                <section className='AsistenciaCal'>
                    <div>
                        <h1>ASISTENCIA</h1>
                    </div>
                    <div>  
                        <Calendar className="calendar-component" />
                    </div>
                </section>

                <section className='RegistroAsis'>
                    <div>
                        <h1 className='Registro_text'>REGISTRO DE ASISTENCIA</h1>
                    </div>
                    <div>
                        <section className='Contenedor_Ingreso'>
                            <h1>HORA INGRESO</h1>
                            <input type='text' className='ingreso_hora'></input>
                            <h1>HORA SALIDA</h1>
                            <input type='text' className='ingreso_hora'></input>
                            <button className='Subir_ingreso'>SUBIR</button>
                        </section>
                    </div>
                </section>
            </section>


            <section className='contenedor1'>
                <section className='AsistenciaCal'>
                    <div>
                        <h1> HISTORIAL DE ASISTENCIA</h1>
                    </div>
                    <div>  
                        <section className='Contenedor_Ingreso'>
                            <h1>AUN NO HAY INFORMACION.</h1>
                        </section>
                    </div>
                </section>

                <section className='RegistroAsis'>
                    <div>
                        <h1 className='Registro_text'>RESUMEN DE ASISTENCIA</h1>
                    </div>
                    <div>
                        <section className='Contenedor_Ingreso'>
                            <table className="tabla-resumen">
                                <thead>
                                    <tr>
                                        <th>LLEGADAS TARDE</th>
                                        <th>INASISTENCIAS</th>
                                        <th>DIAS CON PERMISO</th>
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
        </>
    )
}
export default Calendarp
