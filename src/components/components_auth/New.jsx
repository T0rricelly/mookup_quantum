import React from 'react'
import Header from './Header_Auth'
import Footer from './footer'
export const New = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <h2 className='container__title'>Nueva Contraseña</h2>
        <form action="POST" className='container__form'>
          <label htmlFor="id_card" className='container__label'>Digite su nueva contraseña</label>
          <input type="text" className='container__input' placeholder='Ingrese su nueva contraseña' name='id_card' />
          <label htmlFor="password" className='container__label'>Confirme su constraseña</label>
          <input type="password" className='container__input' placeholder='Confirme su contraseña' name='password' />
          <button type='submit' className='container__submit'>Confirmar</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
export default New