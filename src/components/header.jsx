import quantumLogo from './../assets/images/quantum_logo.png';
import './../styles/header.css';
export const Header = () => {
  return (
    <nav className='nav'>
        <img src={quantumLogo} alt="Quantum Logo" className='nav__img'/>
    </nav>
  )
}