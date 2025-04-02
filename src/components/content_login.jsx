import './../styles/content_login.css';

export const Content_Login = () => {
  return (
    <main className='container'>
      <h2 className='container__title'>Login</h2>
      <form action="POST" className='container__form'>
        <label htmlFor="id_card" className='container__label'>Numero de documento</label>
        <input type="text" className='container__input' placeholder='Ingrese su cedula' name='id_card' required/>
        <label htmlFor="password" className='container__label'>Contraseña</label>
        <input type="password" className='container__input' placeholder='Ingrese su contraseña' name='password' required />
        <button type='submit' className='container__submit'>Ingresar</button>
        <a href="/forgot" className='container__link'>Olvide mi contraseña</a>
      </form>
    </main>
  )
}
