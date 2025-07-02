import { Link } from 'react-router-dom';
import './Menu.css';
import Barras from './../../assets/icons/menu_bars.svg';
import Casa from './../../assets/icons/home.svg';
import Check from './../../assets/icons/check.svg';
import Cal from './../../assets/icons/calendar.svg';
import Contra from './../../assets/icons/sign.svg';
import Emp from './../../assets/icons/employee.svg';

export const Menu = () => {
  return (
    <ul className='menu'>
      <li className='titulo_menu'>
        <img src={Barras} alt="Barras_menu" />
        <span>MENU</span>
      </li>
      <li className='text_menu'>
        <img src={Casa} alt="Casa" />
        <Link to="/home">
          <span>INICIO</span>
        </Link>
      </li>
      <li className='text_menu'>
        <img src={Check} alt="Check" />
        <Link to="/home/permisos">
          <span>PERMISOS</span>
        </Link>
      </li>
      <li className='text_menu'>
        <img src={Cal} alt="Calendario" />
        <Link to="/home/assistance">
          <span>ASISTENCIA</span>
        </Link>
      </li>
      <li className='text_menu'>
        <img src={Contra} alt="Hoja" />
        <Link to="/home/contrat">
          <span>CONTRATO</span>
        </Link>
      </li>
      <li className='text_menu'>
        <img src={Emp} alt="Empleado" />
        <Link to="/home/employe">
          <span>EMPLEADOS</span>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;