import './../../styles/styles_auth/content_login.css';
import HeaderAuth from './Header_Auth';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const idCardTest = '1031650532';
const passwordTest = '1234567890';

export const Content_Login = () => {

  const [idCard, setidCard] = useState('');
  const [password, setPassword] = useState('');

    const handleIdCard = (e) => {
      setidCard(e.target.value);
    }
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

  const submit = (e) => {

    e.preventDefault(e);
    if (idCard === idCardTest && password === passwordTest) {
      window.location.href = '/home';
    } else if (idCard === '' || password === '') {
      emptyCamps();
    } else {
      errorData();
    }

    
  }
  const emptyCamps = () => {
    toast.error('Por favor llena todos los campos vacios', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }
  const errorData = () => {
    toast.error('Los datos ingresados no son correctos', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <HeaderAuth />
      <main className='container'>
        <h2 className='container__title'>Login</h2>
        <form action="" className='container__form' onSubmit={submit} >
          <label htmlFor="id_card" className='container__label'>Numero de documento</label>
          <input
            type="text"
            className='container__input'
            placeholder='Ingrese su cedula'
            name='id_card'
            onChange={handleIdCard}
            required />
          <label htmlFor="password" className='container__label'>Contraseña</label>
          <input
            type="password"
            className='container__input'
            placeholder='Ingrese su contraseña'
            name='password'
            onChange={handlePassword}
            required />
          <button
            type='submit'
            onClick={submit}
            className='container__submit'
          >
            Ingresar
          </button>
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
