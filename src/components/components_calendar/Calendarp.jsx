import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/styles_calendar/Calendarp.css";
import Menu from "./../menu/menu.jsx";
import './../../views/Home.css'




export const Calendarp = () => {
    return (
        <>
            <section className="contenedor">
                
                    <Menu />
                {/* <section className="menandcal">

                    <h1 className="Asistencia_text">ASISTENCIA</h1>
                    <Calendar className="Calendarioo" />
                    <h1 className="Reporte_buttom">REPORTE</h1>
                    <section className="Report_box">
                        <h1 className="Report_text">HORA DE INGRESO</h1>
                        <input type="str" className="hora_inp"></input>
                        <h1 className="Report_text">HORA DE SALIDA</h1>
                        <input type="str" className="hora_inp"></input>
                    </section>
                </section> */}
            </section>
        </>
    )
}
export default Calendarp
