import Header from './Header_Auth';
import Footer from './footer';
export const Restore = () => {
    return (
        <>
            <Header />
            <h2 className="main__title">Restablecer contraseña</h2>
            <main className="main">
                <form action="post" className="main__form">
                    <label htmlFor="email" className="main__label">Ingrese el codigo para restaurar su nueva contraseña</label>
                    <input type="email" name='email' className='main__input' placeholder='Ingrese el codigo' required />
                </form>
                <p className="main__indications">
                    Revise el codigo que le enviamos a su correo electronico.
                </p>
                <a href="/forgot" className="main__btnCancel">Cancelar</a>
                <a href="/new" className="main__btnNext">Siguiente</a>
            </main>
            <Footer />
        </>
    )
}
export default Restore