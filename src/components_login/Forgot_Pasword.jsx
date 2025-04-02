import '../styles/forgot_pasword.css'
import Header from './Header_Login';
import Footer from './Footer';

export const Forgot_Pasword = () => {
  return (
    <>
      <Header/>
      <h2 className="main__title">Restablecer contraseña</h2>
      <main className="main">
        <form action="post" className="main__form">
          <label htmlFor="email" className="main__label">Ingrese su correo electronico</label>
          <input type="email" name='email' className='main__input' placeholder='ejemplo@gmail.com' required/>
        </form>
        <p className="main__indications">
          Revise su correo y siga los pasos que se le indican para restablecer su contraseña.
        </p>
        <a href="/login" className="main__btnCancel">Cancelar</a>
        <a href="/restore" className="main__btnNext">Siguiente</a>
      </main>
      <Footer/>
    </>
  )
}
export default Forgot_Pasword