import './Menu.css';
import { Link } from 'react-router-dom';
import Dash from './../../assets/icons/dashboard.svg';
import Check from './../../assets/icons/check.svg';
import Cal from './../../assets/icons/assistance.svg';
import Contrat from './../../assets/icons/contrat.svg';
import Help from './../../assets/icons/help.svg';
import Logout from './../../assets/icons/logout.svg';

export const Menu = () => {
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


          <Link to="/home" className="block_link">
            <img src={Dash} alt="Dashboard" />
            <span>Dashboard</span>
          </Link>
          <Link to="/home/permisos" className="block_link">
            <img src={Check} alt="Permisos" />
            <span>Permisos</span>
          </Link>
          <Link to="/home/assistance" className="block_link">
            <img src={Cal} alt="Calendario" />
            <span>Asistencia</span>
          </Link>
          <Link to="/home/contrat" className="block_link">
            <img src={Contrat} alt="Contrato" />
            <span>Contrato</span>
          </Link>
        </div>
        <div className="block_down">

          <Link to="/home/tyc" className='block_link'>
            <img src={Help} alt="Empleado" />
            <span>Terminos y condiciones </span>
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

export default Menu;