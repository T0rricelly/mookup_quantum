import anadir from '../../../../src/assets/icons/Plus.svg'
import search from '../../../../src/assets/icons/Search.svg'
import update from '../../../../src/assets/icons/Update Left Rotation.svg'
import cancel from '../../../../src/assets/icons/Cancel.svg'
import './employe.css'

const Employe = () => {
    return (
        <>
            <section className="contenedor_admin_empleado">
                <div className="titulo_admin_empleado">
                    <h1 className='titulo_'>Administracion de empleados     </h1>
                </div>
                <div className="contenido_admin_empleado">
                    <div className='cajas_admin_empleado'>
                        <div className='seccion_anadir_empleado'>
                            <img src={anadir} alt="" />
                            <h4 className='titulo_categorias'> Añadir Empleado</h4>
                        </div>
                    </div>
                    <div className='cajas_admin_empleado'>
                        <div className='seccion_anadir_empleado'>
                            <img src={search} alt="" />
                            <h4 className='titulo_categorias'> Buscar Empleado</h4>
                        </div>
                    </div>
                    <div className='cajas_admin_empleado'>
                        <div className='seccion_anadir_empleado'>
                            <img src={update} alt="" />
                            <h4 className='titulo_categorias'> Actualizar datos de los empleados</h4>
                        </div>
                    </div>
                    <div className='cajas_admin_empleado'>
                        <div className='seccion_anadir_empleado'>
                            <img src={cancel} alt="" />
                            <h4 className='titulo_categorias'> Eliminar Empleado</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employe
