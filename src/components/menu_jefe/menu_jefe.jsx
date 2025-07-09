import './menu_jefe.css';
import { Link } from 'react-router-dom';
import Dash from './../../assets/icons/dashboard.svg';
import Check from './../../assets/icons/check.svg';
import Cal from './../../assets/icons/assistance.svg';
import Contrat from './../../assets/icons/contrat.svg';
import Logout from './../../assets/icons/logout.svg';
import employee from './../../assets/icons/employee.svg';

export const Menu_Jefe = () => {
  const name = "Sena"
  const logOut = () => {
    window.location.href = '/login';
    localStorage.removeItem('logged'); 
  }
  return (
    <>
      <section className="menu">

        <div className="block_up">
        <section className='menu_info'>
          <div className="info_inicial ">{name.charAt(0)}</div>
          <p className="info_nombre">{name}</p>
        </section>


          <Link to="/homejefe" className="block_link">
            <img src={Dash} alt="Dashboard" />
            <span>Dashboard</span>
          </Link>
          <Link to="/permisosjefe" className="block_link">
            <img src={Check} alt="Permisos" />
            <span>Permisos</span>
          </Link>
          <Link to="/assistancejefe" className="block_link">
            <img src={Cal} alt="Calendario" />
            <span>Asistencia</span>
          </Link>
          <Link to="/contratjefe" className="block_link">
            <img src={Contrat} alt="Contrato" />
            <span>Contrato</span>
          </Link>
          
        </div>
        <div className="block_down">

          <Link to="/employejefe" className="block_link">
            <img src={employee} alt="employe" />
            <span>Empleado</span>
          </Link>


          <Link onClick={logOut} className='block_link'>
            <img src={Logout} alt="Empleado" />
            <span>Salir de tu cuenta </span>
          </Link>

        </div>
      </section>
    </>
  );
};

export default Menu_Jefe;