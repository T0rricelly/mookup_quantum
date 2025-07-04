import React from 'react'
import './footer.css'
import quantumLogo from './../../assets/images/quantum_logo.png'
import instagramLogo from './../../assets/icons/instagram_logo.svg'
import facebookLogo from './../../assets/icons/facebook_logo.svg'
import xLogo from './../../assets/icons/x_logo.svg'
import ytLogo from './../../assets/icons/yt_logo.svg'

export const Footer = () => {
    return (
        <footer className='footer'>
            <img src={quantumLogo} alt="logo quantum" className='footer__img' />
            <div className='footer__info'>
                <p className='footer__data'>Direccion: *direccion*</p>
                <p className='footer__data'>Contacto: 20quantum24@gmail.com</p>
                <p className='footer__data'>Linea de atencion: *numero de celular*</p>
            </div>
            <div className="footer__contain">

                <div className='footer__social'>
                    <h4 className='footer__title'>SIGUENOS</h4>
                    <a href="https://www.instagram.com/qua.ntum2024/" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={instagramLogo} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61575232014860&sk=about_details" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={facebookLogo} alt="" /></a>
                    <a href="https://x.com/20Quantum24" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={xLogo} alt="" /></a>
                    <a href="https://youtube.com/@20quantum24?si=55tWanLKQN-kKC6w" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={ytLogo} alt="" /></a>
                </div>
                <a href="#" className='footer__politics'>Terminos y condiciones</a>
                <a href="#" className='footer__politics'>Politica de privacidad</a>
            </div>


        </footer>

    )
}
export default Footer