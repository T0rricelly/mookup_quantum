import Header from './Header_Auth';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const codeTest = '2996234';

export const Restore = () => {
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
    const cancel = () => {
        window.location.href = '/restore';
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
            <Header />
            <h2 className="main__title">Restablecer contraseña</h2>
            <main className="main">
                <form action="post" className="main__form">
                    <label htmlFor="code" className="main__label">Ingrese el codigo para restaurar su nueva contraseña</label>
                    <input
                        type="text"
                        name='code'
                        className='main__input'
                        placeholder='Ingrese el codigo'
                        onChange={handleCode}
                        required />
                </form>
                <p className="main__indications">
                    Revise el codigo que le enviamos a su correo electronico.
                </p>
                <button type='submit' onClick={cancel} className="main__btnCancel">Cancelar</button>
                <button type='submit' onClick={next} className="main__btnNext">Siguiente</button>
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
export default Restore