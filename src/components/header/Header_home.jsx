import quantumLogo from './../../assets/images/quantum_logo.png';
import './header_home.css';
export const Header = () => {
  const user = "Jefe de Personal"
  const account = () => {
    window.location.href = '/home/cuenta';
  }
  const logOut = () => {
    window.location.href = '/login';
    localStorage.removeItem('logged'); 
  }
  return (
    <header className='header_home'>
      
      <img src={quantumLogo} alt="Quantum Logo" className='header__img' />
        <p className='rol'>
          Rol: {user}
        </p>
      <div className='buttons'>
        <button  className='btn_cuenta' onClick={account}>Cuenta</button>
        
        <button className='btn_logout' onClick={logOut}>Log out</button>
      </div>
    </header>
  )
}
export default Header;