import quantumLogo from './../../assets/images/quantum_logo.png';
import './../../styles/styles_home/header_home.css';
export const Header = () => {
  return (
    <header className='header_home'>
      
      <img src={quantumLogo} alt="Quantum Logo" className='header__img' />
        <p className='rol'>
          Rol:
        </p>
      <div className='buttons'>
        <button className='btn_cuenta'>Cuenta</button>
        <a className='btn_logout' href='/login'>Log out</a>
      </div>
    </header>
  )
}
export default Header;