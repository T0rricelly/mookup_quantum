import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import './new.css'
import quantum from './../../../assets/images/quantum_logo.png'

export const New = () => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault(e)
    if (newPassword === '') {
      emptyCamps()
    } else if (password === newPassword) {
      window.location.href = '/login'
    } else {
      errorData()
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
    toast.error('Las contraseñas deben coincidir', {
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
      <main className='container'>
        <section className="back_part">
          <div className="gray"></div>
          <div className="white"></div>
        </section>
        <form action="POST" className='container__form'>
          <nav className="container__image_new">
            <img src={quantum} className='container__img' alt="Quantum" />
          </nav>

          <section className="form_new">

            <h2 className='container__title'>Nueva Contraseña</h2>
            <label htmlFor="id_card" className='container__label'>Digite su nueva contraseña</label>
            <input
              type="text"
              className='container__input'
              placeholder='Ingrese su nueva contraseña'
              name='id_card'
              onChange={handlePassword}
            />
            <label htmlFor="password" className='container__label'>Confirme su contraseña</label>
            <input
              type="text"
              className='container__input'
              placeholder='Confirme su contraseña'
              name='password'
              onChange={handleNewPassword}
            />
            <button
              type='submit'
              className='container__submit'
              onClick={submit}
            >
              Confirmar
            </button>
          </section>

          <nav className="container__image_new">
            <img src={quantum} className='container__img' alt="Quantum" />
          </nav>
        </form>
      </main>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        newestOnTop={false}
        hideProgressBar={false}
        rtl={false}
        draggable
        pauseOnHover
        pauseOnFocusLoss
      />
    </>
  )
}
export default New