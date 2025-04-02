import './../styles/forgot_pasword.css'
export const Restore = () => {
    return (
        <>
            <h2 className="main__title">Restablecer contraseña</h2>
            <main className="main">
                <form action="post" className="main__form">
                    <label htmlFor="email" className="main__label">Ingrese el codigo para restaurar su nueva contraseña</label>
                    <input type="email" name='email' className='main__input' placeholder='ejemplo@gmail.com' required />
                </form>
                <a href="/forgot" className="main__btnCancel">Cancelar</a>
                <a href="/new" className="main__btnNext">Siguiente</a>
            </main>
        </>
    )
}
