import quantumLogo from './../../assets/images/quantum_logo.png';
import './header_home.css';
export const Header = () => {
  const user = "Jefe"
  const account = () => {
    window.location.href = '/home/cuenta';
  }
  return (
    <header className='header_home'>   
      <img src={quantumLogo} alt="Quantum Logo" className='header__img' />
      <p className='rol'>
        Rol: {user}
      </p>
      <button  className='btn_cuenta' onClick={account}>Cuenta</button>
    </header>
  )
}
export default Header;