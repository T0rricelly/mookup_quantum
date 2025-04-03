import Barras from '../../assets/icons/menu_bars.svg'
import Casa from '../../assets/icons/home.svg'
import Check from '../../assets/icons/check.svg'
import Cal from '../../assets/icons/calendar.svg'
import Contra from '../../assets/icons/sign.svg'
import Emp from '../../assets/icons/employe.svg'
export const Menu = () => {
  return (
    <ul>
        <li><img src={Barras} alt="Barras_menu" />MENU</li>
        <li><img src={Casa} alt="Casa" />INICIO</li>
        <li><img src={Check} alt="Check" />PERMISOS</li>
        <li><img src={Cal} alt="Calendario" />ASISTENCIA</li>
        <li><img src={Contra} alt="Hoja" />CONTRATO</li>
        <li><img src={Emp} alt="Empleado" />EMPLEADOS</li>
    </ul>
  )
}

export default Menu