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
            <section className="menandcal">
                
                    <h1 className="Asistencia_text">ASISTENCIA</h1>
                    <Calendar className="Calendarioo" />
                    <h1 className="Reporte_buttom">REPORTE</h1>
                    <section className="Report_box">
                        <h1 className="Report_text">HORA DE INGRESO</h1>
                        <input type="str" className="hora_inp"></input>
                        <h1 className="Report_text">HORA DE SALIDA</h1>
                        <input type="str" className="hora_inp"></input>
                    </section>
            </section>
        </>
    )
}
export default Calendarp
