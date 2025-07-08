import './forgot_pasword.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import quantum from './../../../assets/images/quantum_logo.png';

export const Forgot_Pasword = () => {
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const next = (e) => {
    e.preventDefault(e)
    if (email === '') {
      error();
    } else {
      window.location.href = '/restore';
    }
  }
  const cancel = () => {
    window.location.href = '/login';
  }
  const error = () => {
    toast.error('Por favor llena los campos vacios', {
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
      <main className="container">
        <section className="back_part">
          <div className="white"></div>
          <div className="gray"></div>
        </section>
        <form action="" className="container__form">
          <section className="form_forgot">

            <h2 className="container__title">Restablecer contraseña</h2>
            <label
              htmlFor="email"
              className="container__label_forgot"
            >
              Ingrese su correo electronico
            </label>
            <input
              type="email"
              name='email'
              className='container__input_forgot'
              placeholder='ejemplo@gmail.com'
              required
              onChange={handleEmail}
            />
            <p className="container__indications">
              Revise su correo y siga los pasos que se le indican para restablecer su contraseña.
            </p>
            <div className="container__buttons">

              <button
                onClick={cancel}
                className="container__btnCancel"
              >
                Cancelar
              </button>
              <button
                type='submit'
                onClick={next}
                className="container__btnNext"
              >
                Siguiente
              </button>
            </div>
          </section>
          <nav className="container__image_forgot">
            <img src={quantum} className='container__img' alt="Quantum" />
          </nav>
        </form>
      </main >
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