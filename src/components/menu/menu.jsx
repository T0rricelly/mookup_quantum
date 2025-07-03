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
  return (
    <>
      <ul className='menu'>
        <div className="block_up">
          <li className="info">
            <div className="info_inicial ">{name.charAt(0)}</div>
            <p className="info_nombre">{name}</p>
          </li>

          <li className='text_menu'>
            <img src={Dash} alt="Casa" />
            <Link to="/home">
              <span>INICIO</span>
            </Link>
          </li>
          <li className='text_menu'>
            <img src={Cal} alt="Calendario" />
            <Link to="/home/assistance">
              <span>ASISTENCIA</span>
            </Link>
          </li>
          <li className='text_menu'>
            <img src={Contrat} alt="Hoja" />
            <Link to="/home/contrat">
              <span>CONTRATO</span>
            </Link>
          </li>
          <li className='text_menu'>
            <img src={Check} alt="Check" />
            <Link to="/home/permisos">
              <span>PERMISOS</span>
            </Link>
          </li>
        </div>
        <div className="block_down">
          <li className='text_menu'>
            <img src={Help} alt="Empleado" />
            <Link to="/home/employe">
              <span>Terminos y condiciones</span>
            </Link>
          </li>
          <li className='text_menu'>
            <img src={Logout} alt="Empleado" />
            <Link to="/home/employe">
              <span>Salir de tu cuenta</span>
            </Link>
          </li>

        </div>
      </ul>
    </>
  );
};

export default Menu;