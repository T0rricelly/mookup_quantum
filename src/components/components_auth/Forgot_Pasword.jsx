import './../../styles/styles_auth/forgot_pasword.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Forgot_Pasword = () => {
  const [email, setEmail] = useState('');

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const next = (e) => {
    e.preventDefault(e)
    if (email === '') {
      error();
    }else {
      window.location.href = '/restore';
    }
  }
  const cancel = () => {
    window.location.href = '/login';
  }
  const error = () => {
    toast.error('Por favor llena los campos vacios',{
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
      <h2 className="main__title">Restablecer contraseña</h2>
      <main className="main">
        <form action="" className="main__form">
          <label 
          htmlFor="email" 
          className="main__label"
          >
            Ingrese su correo electronico
          </label>
          <input 
          type="email" 
          name='email' 
          className='main__input' 
          placeholder='ejemplo@gmail.com' 
          required
          onChange={handleEmail}
          />
        </form>
        <p className="main__indications">
          Revise su correo y siga los pasos que se le indican para restablecer su contraseña.
        </p>
        <button 
        onClick={cancel} 
        className="main__btnCancel"
        >
          Cancelar
        </button>
        <button 
        type='submit' 
        onClick={next} 
        className="main__btnNext"
        >
          Siguiente
        </button>
      </main>
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
export default Forgot_Pasword