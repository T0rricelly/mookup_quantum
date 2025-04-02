import React from 'react'
import { Header } from './Header_home.jsx'

export const Inicio = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <h2 className='container__title'>Bienvenido a Quantum</h2>
                <p className='container__text'>Esta es la pagina de inicio de Quantum, donde puedes encontrar toda la informacion sobre nuestros servicios y productos.</p>
                <p className='container__text'>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
            </main>
        </>
    )
}
export default Inicio