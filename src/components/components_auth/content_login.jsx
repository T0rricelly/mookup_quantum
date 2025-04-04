import './../../styles/styles_auth/content_login.css';
import Header from './Header_Auth';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Content_Login = () => {
  const showToast = () => {
    toast.error('Por favor llena todos los campos sugeridos', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <Header />
      <main className='container'>
        <h2 className='container__title'>Login</h2>
        <form action="POST" className='container__form' >
          <label htmlFor="id_card" className='container__label'>Numero de documento</label>
          <input type="text" className='container__input' placeholder='Ingrese su cedula' name='id_card' required />
          <label htmlFor="password" className='container__label'>Contraseña</label>
          <input type="password" className='container__input' placeholder='Ingrese su contraseña' name='password' required />
          <button type='submit' onClick={showToast} className='container__submit'>Ingresar</button>
          <a href="/forgot" className='container__link'>Olvide mi contraseña</a>
        </form>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />  
    </>
  )
}
export default Content_Login
