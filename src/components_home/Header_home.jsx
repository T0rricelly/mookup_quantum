import quantumLogo from './../assets/images/quantum_logo.png';
import './../styles/styles_home/header_home.css';
export const Header = () => {
  return (
    <header className='header'>
        <div className="imagen">
            <img src={quantumLogo} alt="Quantum Logo" className='header__img'/> 
        </div>
        
        <div className="rol">
            Rol:
        </div>
        <div className='buttons'>
            <button className='btn_cuenta'>Cuenta</button>    
            <button className='btn_logout'>Log out</button>
        </div>  
            
        
    </header>
  )
}
export default Header;