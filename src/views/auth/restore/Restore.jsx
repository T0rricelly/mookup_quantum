import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './restore.css';
import quantum from './../../../assets/images/quantum_logo.png';
import hidden from './../../../assets/icons/hidden.svg'


export const Restore = () => {
    const codeTest = '3124';
    const [code, setCode] = useState('');

    const handleCode = (e) => {
        setCode(e.target.value)
    }
    const next = (e) => {
        e.preventDefault(e)
        if (code === '') {
            error();
        } else if (code === codeTest) {
            window.location.href = '/new';
        } else {
            errorData();
        }
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
    const errorData = () => {
        toast.error('El codigo ingresado no es correcto', {
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
                    <div className="gray"></div>
                    <div className="white"></div>
                </section>
                <form action="post" className="container__form">
                    <nav className="container__image">
                        <img src={quantum} className='container__img' alt="Quantum" />
                    </nav>
                    <section className="form">
                        <img src={hidden} alt="" className='form__hidden'/>
                        <h2 className="container__title">Restablecer contraseña</h2>
                        <label htmlFor="code" className="container__label_restore">Ingrese el codigo para crear su nueva contraseña</label>
                        <section className="container__inputs">

                            <input
                                type="text"
                                name='code'
                                maxLength={1}
                                className='container__input_restore'
                                onChange={handleCode}
                                required />
                            <input
                                type="text"
                                name='code'
                                className='container__input_restore'
                                onChange={handleCode}
                                required />
                            <input
                                type="text"
                                name='code'
                                className='container__input_restore'
                                onChange={handleCode}
                                required />
                            <input
                                type="text"
                                name='code'
                                className='container__input_restore'
                                onChange={handleCode}
                                required />
                        </section>
                        <button type='submit' onClick={next} className="container__btnNext_restore">Enviar</button>
                    </section>
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
export default Restore