
import './perm_emp.css'
import { Link } from 'react-router-dom'
/*import {Select}  from 'react-select'
const opciones = [
    { label: 'Pendiente', value: 'Pendiente' },
    { label: 'Aprobado', value: 'Aprobado' },
    { label: 'Rechazado', value: 'Rechazado' },
]
 const SelectChange = (event) =>{
    console.log(event);
    }*/
const cont_perm_emp = () => {
    return (
        <>
            <section className='cont_sol_perm'>
                <header className='titulo_permiso_sol'>
                    <h2>SOLICITUD PERMISO</h2>
                </header>
                <section className='tabla_perm_sol'>
                    <article>
                        <label>NOMBRE DEL EMPLEADO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>
                    <article>
                        <label>DOCUMENTO DEL EMPLEADO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>


                    <article>
                        <label>CARGO DEL EMPLEADO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>
                    <article>
                        <label>FECHA DE LA SOLICITUD</label>
                        <input type="text" className='input_perm_sol' />
                    </article>


                    <article>
                        <label>TIPO DE PERMISO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>
                    <article>
                        <label>SOPORTE</label>
                        <input type="text" className='input_perm_sol' />
                    </article>


                    <article>
                        <label>FECHA DE INICIO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>
                    <article>
                        <label>FECHA FINALIZACION</label>
                        <input type="text" className='input_perm_sol' />
                    </article>


                    <article>
                        <label>DIAS DE PERMISO</label>
                        <input type="text" className='input_perm_sol' />
                    </article>


                </section>
                <article className="select_est">
                    <label>ESTADO DE PERMISO</label>
                    <select name="estado" className='select_perm_sol'>
                        <option value="">Seleccione</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="aprobado">Aprobado</option>
                        <option value="rechazado">Rechazado</option>
                    </select>
                    {/* <Select className='select_perm_sol'
                        options={opciones}
                        onChange={SelectChange}
                    />*/}

                </article>
                <article className="btn_perm_sol">
                    <Link to="/home/permisos">
                        <button id='cancel'>CANCELAR</button>
                    </Link>

                    <button id="btn_aceptar">ACEPTAR</button>
                </article>
            </section>
        </> 
    )
}
export default cont_perm_emp;