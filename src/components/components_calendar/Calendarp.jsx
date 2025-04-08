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
            <Header />
            <section className="menandcal">
                <Menu />
                <h1 className="Asistencia_text">ASISTENCIA</h1>
                <Calendar className="Calendarioo"/>
            </section>
            <Footer/>
        </>
    )
}
export default Calendarp