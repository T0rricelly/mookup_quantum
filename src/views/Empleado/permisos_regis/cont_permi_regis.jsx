import './permisos_regis.css'
import { Link } from 'react-router-dom'

const Permi_regis = () => {
    return (
        <>
            <section className='cont_permisos_regis'>
                <header className='header_perm_regis'>
                    <nav className='titulo_perm_regis'>
<h2>PERMISOS REGISTRADOS</h2>
                    </nav>
                    
                    <Link to="/home/permisos">
                        <button id='regre'>Regresar</button>
                    </Link>
                </header>


            </section>
        </>
    )
}

export default Permi_regis
