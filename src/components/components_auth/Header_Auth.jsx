import quantumLogo from './../../assets/images/quantum_logo.png';
import './../../styles/styles_auth/header_auth.css';
export const Header = () => {
  return (
    <header className='header'>
        <img src={quantumLogo} alt="Quantum Logo" className='header__img'/>
    </header>
  )
}
export default Header;