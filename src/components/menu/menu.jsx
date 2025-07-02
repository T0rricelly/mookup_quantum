import './Menu.css';
import { Link } from 'react-router-dom';
import Barras from './../../assets/icons/menu_bars.svg';
import Casa from './../../assets/icons/home.svg';
import Check from './../../assets/icons/check.svg';
import Cal from './../../assets/icons/calendar.svg';
import Contra from './../../assets/icons/sign.svg';
import Emp from './../../assets/icons/employee.svg';

export const Menu = () => {
  const name = "Sena"
  return (
    <>
      <ul className='menu'>
        <li className="info">
          <div className="info_inicial">{name.charAt(0)}</div>
          <p className="info_nombre">{name}</p>
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
    </>
  );
};

export default Menu;