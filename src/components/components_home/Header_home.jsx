import quantumLogo from './../../assets/images/quantum_logo.png';
import './../../styles/styles_home/header_home.css';
export const Header = () => {
  const user = "Jefe de Personal"
  return (
    <header className='header_home'>
      
      <img src={quantumLogo} alt="Quantum Logo" className='header__img' />
        <p className='rol'>
          Rol: {user}
        </p>
      <div className='buttons'>
        <a className='btn_cuenta' href='/cuenta'>Cuenta</a>
        
        <a className='btn_logout' href='/login'>Log out</a>
      </div>
    </header>
  )
}
export default Header;