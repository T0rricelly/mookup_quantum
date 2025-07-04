import './permisos_regis.css'
import { Link } from 'react-router-dom'
import hoja from '../../../assets/icons/file-text.svg'
import basurita from '../../../assets/icons/trash-2.svg'
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
                <section className='tabla_perm'>
                    <table className="tabla_perm">
                        <thead className="head_tabla_perm">
                            <tr>
                                <th className="titulo_tabla_perm">TIPO DE PERMISO</th>
                                <th className="titulo_tabla_perm">FECHA INICIO</th>
                                <th className="titulo_tabla_perm">FECHA FIN</th>
                                <th className="titulo_tabla_perm">COMPROBANTE</th>
                                <th className="titulo_tabla_perm">ESTADO</th>
                                <th className="titulo_tabla_perm"></th>
                            </tr>
                        </thead>
                        <tbody className="body_tabla_perm">
                            <tr className="cont_tabla_perm">
                                <td className="campos_tabla_perm">Licencia de Paternidad</td>
                                <td className="campos_tabla_perm">05/06/2025</td>
                                <td className="campos_tabla_perm">05/06/2025</td>
                                <td className="campos_tabla_perm_file">
                                   <img src={hoja} alt="" />
                                    Circular_escolar.pdf
                                </td>
                                <td className="campos_tabla_perm_est">
                                    APROBADA 
                                </td>
                                <td className="campos_tabla_perm">
                                    <img src={basurita} className='elm_tabla_perm' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </section>
        </>
    )
}

export default Permi_regis
