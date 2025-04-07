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
        <li className='titulo_menu'><img src={Barras} alt="Barras_menu" />
          MENU
        </li>
        <li className='text_menu'><img src={Casa} alt="Casa" /> 
          INICIO
        </li>
        <li className='text_menu'><img src={Check} alt="Check" />
          PERMISOS
        </li>
        <li className='text_menu'><img src={Cal} alt="Calendario" /> 
          ASISTENCIA
        </li>
        <li className='text_menu'><img src={Contra} alt="Hoja" /> 
          CONTRATO
        </li>
        <li className='text_menu'><img src={Emp} alt="Empleado" /> 
          EMPLEADOS
        </li>
    </ul>
  )
}

export default Menu