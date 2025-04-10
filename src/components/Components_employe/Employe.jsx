import React from 'react'
import Header from '../components_home/Header_home'
import Footer from '../components_auth/footer'
import Menu from '../components_home/menu'
import search from './../../assets/icons/lupa.svg'
import './../../styles/styles_employe/Employe.css'

const Employe = () => {
    return (
        <>
            <Header />
            <div className="contenedor">
                <aside className='MENU'>
                    <Menu />

                </aside>
                <div className="CONTENIDO">

                    <section className="cont_permisos">
                        <nav className="tiempo">
                            <h1 className="titulo_ini">Empleados</h1>
                            <article>
                                <button className="buscar">
                                    Buscar
                                    <img className='lupa' src={search} alt="" />
                                </button>
                            </article>
                        </nav>

                        <section className="tabla_container">
                            <table className="tabla">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Primer apellido</th>
                                        <th>Segundo apellido</th>
                                        <th>Cargo</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Juan Alejandro</td>
                                        <td>Moreno</td>
                                        <td>Amaya</td>
                                        <td>Personal de aseo y mantenimiento</td>
                                        <td>Activo</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Santiago</td>
                                        <td>Torres</td>
                                        <td>Higuera</td>
                                        <td>Vendedor</td>
                                        <td>Activo</td>
                                    </tr>
                                    <tr>
                                        <td>Tomas Felipe</td>
                                        <td>Laguna</td>
                                        <td>Acevedo</td>
                                        <td>Mensajero</td>
                                        <td>Activo</td>
                                    </tr>
                                    <tr>
                                        <td>Simon</td>
                                        <td>Stiven</td>
                                        <td>Valbuena</td>
                                        <td>Recepcionista</td>
                                        <td>Activo</td>
                                    </tr>
                                    <tr>
                                        <td>Juan Felipe</td>
                                        <td>Rodriguez</td>
                                        <td>Vasquez</td>
                                        <td>Personal de aseo y mantenimiento</td>
                                        <td>Activo</td>
                                    </tr>
                                    <tr>
                                        <td>Robinson</td>
                                        <td>Puentes</td>
                                        <td>Cardenas</td>
                                        <td>Asistente administrativo</td>
                                        <td>Activo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Employe
