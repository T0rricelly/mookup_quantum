import React from 'react'
import './../styles/footer.css'
import quantumLogo from './../assets/images/quantum_logo.png'
import instagramLogo from './../assets/icons/instagram_logo.svg'
import facebookLogo from './../assets/icons/facebook_logo.svg'
import xLogo from './../assets/icons/x_logo.svg'
import ytLogo from './../assets/icons/yt_logo.svg'

export const Footer = () => {
    return (
        <footer className='footer'>
            <img src={quantumLogo} alt="logo quantum" className='footer__img' />
            <div className='footer__info'>
                <p className='footer__data'>Direccion: *direccion*</p>
                <p className='footer__data'>Contacto: QUANTUM@gmail.com</p>
                <p className='footer__data'>Linea de atencion: *numero de celular*</p>
            </div>
            <div className="footer__contain">

                <div className='footer__social'>
                    <h4 className='footer__title'>SIGUENOS</h4>
                    <a href="https://www.instagram.com/quantum/" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={instagramLogo} alt="" /></a>
                    <a href="https://www.facebook.com/quantum/" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={facebookLogo} alt="" /></a>
                    <a href="https://www.x.com/quantum/" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={xLogo} alt="" /></a>
                    <a href="https://www.youtube.com/quantum/" target="_blank" rel="noopener noreferrer" className='footer__link'><img src={ytLogo} alt="" /></a>
                </div>
                <a href="#" className='footer__politics'>Terminos y condiciones</a>
                <a href="#" className='footer__politics'>Politica de privacidad</a>
            </div>


        </footer>

    )
}
export default Footer