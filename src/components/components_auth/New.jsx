import React from 'react'
import HeaderAuth from './Header_Auth'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

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
    }else if ( password === newPassword){
      window.location.href = '/login'
    }else{
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
      <HeaderAuth />
      <main className='container'>
        <h2 className='container__title'>Nueva Contraseña</h2>
        <form action="POST" className='container__form'>
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
        </form>
      </main>
      <Footer />
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