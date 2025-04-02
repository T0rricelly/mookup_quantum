import './../styles/content_login.css';
import  Header  from './Header_Login';
import  Footer  from './Footer';
export const Content_Login = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <h2 className='container__title'>Login</h2>
        <form action="POST" className='container__form'>
          <label htmlFor="id_card" className='container__label'>Numero de documento</label>
          <input type="text" className='container__input' placeholder='Ingrese su cedula' name='id_card' required />
          <label htmlFor="password" className='container__label'>Contraseña</label>
          <input type="password" className='container__input' placeholder='Ingrese su contraseña' name='password' required />
          <button type='submit' className='container__submit'>Ingresar</button>
          <a href="/forgot" className='container__link'>Olvide mi contraseña</a>
        </form>
      </main>
      <Footer />
    </>
  )
}
export default Content_Login
