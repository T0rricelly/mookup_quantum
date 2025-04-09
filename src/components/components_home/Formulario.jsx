import Header from './Header_home';
import Footer from '../components_auth/footer';
import './../../styles/Formulario/formu.css'
import { useForm } from 'react-hook-form'; 

export const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data)
    }

    return (
        <>
            <Header />
            <section className='section_12'>
                <nav className='nav_11'>

                    <h1> CUENTA </h1>

                </nav>

                <section className="container_11">

                    <form className="formulario" onSubmit={handleSubmit(enviar)}>
                        <h1 className="main_title"> Datos personales: </h1>
                        <button className="Actu_datos" type="submit"> Actualizar datos </button>
                        <article className='article_111'>
                            <h4> NOMBRES: </h4>
                            <input type="text" placeholder="" {...register(" NOMBRES1 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> CELULAR: </h4>
                            <input type="number" placeholder="" {...register(" CELULAR1 ")}/>
                        </article>

                        <article className='article_111'> 
                            <h4> APELLIDO 1: </h4>
                            <input type="text" placeholder="" {...register(" APELLIDO1 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> APELLIDO 2: </h4>
                            <input type="text" placeholder="" {...register(" APELLIDO2 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> EPS: </h4>
                            <input type="text" placeholder="" {...register(" EPS ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> ARL: </h4>
                            <input type="text" placeholder="" {...register(" ARL ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> RH: </h4>
                            <input type="text" placeholder="" {...register(" RH1 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> DIRECCION: </h4>
                            <input type="text" placeholder="" {...register(" DIRECCION")}/>
                        </article>

                        <article className='article_111'>
                            <h4> ESTADO CIVIL: </h4>
                            <input type="text" placeholder="" {...register(" ESTADO CIVIL ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> TIPO DE DOCUMENTO: </h4>
                            <input type="text" placeholder="" {...register(" TIPO_DOC ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> NUM. DOCUMENTO: </h4>
                            <input type="number" placeholder="" {...register(" NUM_DOC ")}/>
                        </article>

                        <article>

                        </article>
                        

                        <h1 className="main_title1"> Contacto Emergencia: </h1>

                        <article>

                        </article>

                        <article className='article_111'>
                            <h4> NOMBRES: </h4>
                            <input type="text" placeholder="" {...register(" NOMBRES2 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> CELULAR: </h4>
                            <input type="number" placeholder="" {...register(" CELULAR2 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> APELLIDO 1: </h4>
                            <input type="text" placeholder="" {...register(" APELLIDO3  ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> APELLIDO 2: </h4>
                            <input type="text" placeholder="" {...register(" APELLIDO4 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> RH: </h4>
                            <input type="text" placeholder="" {...register(" RH2 ")}/>
                        </article>

                        <article className='article_111'>
                            <h4> PARENTESCO: </h4>
                            <input type="text" placeholder="" {...register(" PARENTESCO ")}/>
                        </article>
  
                    </form>
                    

                </section>
            </section>
            <Footer />
        </>
    )
}

export default Formulario