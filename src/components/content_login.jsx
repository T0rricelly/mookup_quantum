import './../styles/content_login.css';

export const Content_Login = () => {
  return (
    <main className='container'>
        <h2 className='container__title'>Login</h2>
        <form action="Post" className='container__form'>
            <label htmlFor="id_card" className='container__label'>Cedula</label>
            <input type="text" className='container__input' placeholder='Ingrese su cedula' name='id_card'/>
            <label htmlFor="password" className='container__label'>Contraseña</label>
            <input type="text" className='container__input' placeholder='Ingrese su contraseña' name='password'/>
            <button type='submit'>Ingresar</button>
            <a href="">Olvide mi contraseña</a>
        </form>
    </main>
  )
}
