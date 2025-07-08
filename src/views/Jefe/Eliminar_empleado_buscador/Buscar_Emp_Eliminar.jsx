import './buscar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BuscarEmp = () => {
    return (
        <>
        <section className='Cont_main'>
            <div className='Cont_encabezado'>
                <header className='encabezado'>
                    <h1 className="titulo_principal">Eliminar empleado</h1>
                </header>
            </div>
            <div className='cont'>
                <div className="wrapper">
                    <label htmlFor="busc" className='label_nom'>INGRESE EL NUMERO DE DOCUMENTO</label>
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    <input id = "busc" type="text" className='input_buscar' placeholder='' />
                </div>
            </div>
            <div className='Contenedor_Botones'>
                <Link to="">
                    <div className='boton_cancelar'>
                        <h1 className='texto_boton_cancelar'> Cancelar </h1>
                    </div>
                </Link>
                <div className='boton_consultar'>
                    <h1 className='texto_boton_consultar'> Buscar </h1>
                </div>

            </div>
        </section>
        </>
    );
}
export default BuscarEmp;