import quantumLogo from './../../assets/images/quantum_logo.png';
import './../../styles/styles_home/header_home.css';
export const Header = () => {
  return (
    <header className='header_home'>
      {/* <div> */}

      <img src={quantumLogo} alt="Quantum Logo" className='header__img' />
      {/* </div> */}
      {/* <div> */}
        <p className='rol'>
          Rol:
        </p>
      {/* </div> */}
      <div className='buttons'>
        <button className='btn_cuenta'>Cuenta</button>
        <a href="/cuenta"> cuenta </a>
        <a className='btn_logout' href='/login'>Log o</a>
      </div>
    </header>
  )
}
export default Header;