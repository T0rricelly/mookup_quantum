import './content_login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Hidden from './../../../assets/icons/hidden.svg'
import Show from './../../../assets/icons/show.svg'
import Select from 'react-select';
import quantum from './../../../assets/images/quantum_logo.png'


const idCardTest = '1031650532';
const passwordTest = '1234567890';

export const Content_Login = () => {

  const [idCard, setidCard] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false)
  const [rol, setRol] = useState(null);

  const handleData = (event) => {
    setRol(event.value);
    // console.log(e.value)
    // const data = {
    //   id: '1',
    //   nombre: 'Felipe',
    //   rol: e.value,
    // }
    // return data;
  }
  const handleIdCard = (e) => {
    setidCard(e.target.value);

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const roles = [
    { label: 'Empleado', value: 'Empleado' },
    { label: 'Jefe', value: 'Jefe' }
  ]

  const submit = (e) => {
    e.preventDefault();
    if (!rol) {
      emptyCamps();
      return;
    }
    if (idCard === idCardTest && password === passwordTest) {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('rol', rol);
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

      <main className='container'>
        <section className="back_part">
          <div className="gray"></div>
          <div className="white"></div>
        </section>

        <form action="" className='container__form'>
          <nav className="container__image">
            <img src={quantum} className='container__img' alt="Quantum" />
          </nav>
          <section className="form">

            <h2 className='container__title'>Login</h2>
            <label htmlFor="id_card" className='container__label'>Numero de documento</label>
            <input
              type="text"
              className='container__input'
              placeholder='Ingrese su cedula'
              name='id_card'
              onChange={handleIdCard}
              required />
            <label htmlFor="password" className='container__label'>Contraseña</label>
            <div className="container__group">
              <input
                type={showPass ? "text" : "password"}
                className='container__input container__input--pass'
                placeholder='Ingrese su contraseña'
                name='password'
                onChange={handlePassword}
                required />
              {showPass ?
                <img src={Show} className="container__svg"
                  onClick={() => {
                    setShowPass(!showPass)
                  }} /> :
                <img src={Hidden} className="container__svg"
                  onClick={() => {
                    setShowPass(!showPass)
                  }} />}
            </div>
            <Select
              className='container__select'
              options={roles}
              placeholder='Seleccione su rol'
              value={
                rol ?
                  { label: rol, value: rol }
                  : null}
              onChange={handleData}
            />

            <button
              type='submit'
              onClick={submit}
              className='container__submit'
            >
              Ingresar
            </button>
            <a href="/forgot" className='container__link'>Olvide mi contraseña</a>
          </section>
        </form>
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

export default Content_Login