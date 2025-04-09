import Barras from '../../assets/icons/menu_bars.svg'
import Casa from '../../assets/icons/home.svg'
import Check from '../../assets/icons/check.svg'
import Cal from '../../assets/icons/calendar.svg'
import Contra from '../../assets/icons/sign.svg'
import Emp from '../../assets/icons/employe.svg'
import '../../styles/styles_home/Menu.css'
export const Menu = () => {
  return (
    <ul className='menu'>
      <li className='titulo_menu'>
        <img src={Barras} alt="Barras_menu" />
        <span>MENU</span>
      </li>
      <li className='text_menu'>
        <img src={Casa} alt="Casa" />
        <a href="/home">
        <span>INICIO</span>
        </a>
      </li>
      <li className='text_menu'>
        <img src={Check} alt="Check" />
        <a href="/permisos">
          <span>PERMISOS</span>
        </a>
      </li>
      <li className='text_menu'>
        <img src={Cal} alt="Calendario" />
        <a href="/asistencia">
          <span>ASISTENCIA</span>
        </a>

      </li>
      <li className='text_menu'>
        <img src={Contra} alt="Hoja" />
        <a href="/contrato">
          <span>CONTRATO</span>
        </a>

      </li>
      <li className='text_menu'>
        <img src={Emp} alt="Empleado" />
        <a href="/empleados">
          <span>EMPLEADOS</span>
        </a>
      </li>
    </ul>
  );
}


export default Menu