import './formu.css';
import { useForm } from 'react-hook-form';

export const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data)
    }

    return (
        <>
          
            <section className='Contenedor_Principal'>
                

                <section className="Contenedor_Formulario">

                    <form className="formulario" onSubmit={handleSubmit(enviar)}>
                        <h1 className="main_title"> Datos personales: </h1>

                        <div>

                        </div>
                        
                        <div className='cont_input'>
                            <label for="nomb" className='sub_titulos'> NOMBRES: </label>
                            <input id="nomb" className='inputs' type="text" placeholder="" {...register(" NOMBRES1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "cel" className='sub_titulos'> CELULAR: </label>
                            <input id="cel" className='inputs' type="number" placeholder="" {...register(" CELULAR1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "ape_1" className='sub_titulos'> APELLIDO 1: </label>
                            <input id = "ape_1" className='inputs' type="text" placeholder="" {...register(" APELLIDO1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "ape_2" className='sub_titulos'> APELLIDO 2: </label>
                            <input id = "ape_2" className='inputs' type="text" placeholder="" {...register(" APELLIDO2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "eps" className='sub_titulos'> EPS: </label>
                            <input id = "eps" className='inputs' type="text" placeholder="" {...register(" EPS ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "arl" className='sub_titulos'> ARL: </label>
                            <input id = "arl" className='inputs' type="text" placeholder="" {...register(" ARL ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "rh" className='sub_titulos'> RH: </label>
                            <input id = "rh" className='inputs' type="text" placeholder="" {...register(" RH1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "dir" className='sub_titulos'> DIRECCION: </label>
                            <input id = "dir" className='inputs' type="text" placeholder="" {...register(" DIRECCION")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "est_civil" className='sub_titulos'> ESTADO CIVIL: </label>
                            <input id = "est_civil" className='inputs' type="text" placeholder="" {...register(" ESTADO CIVIL ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "tipo_doc" className='sub_titulos'> TIPO DE DOCUMENTO: </label>
                            <input id = "tipo_doc" className='inputs' type="text" placeholder="" {...register(" TIPO_DOC ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "num_doc" className='sub_titulos'> NUMERO DE DOCUMENTO: </label>
                            <input id = "num_doc" className='inputs' type="number" placeholder="" {...register(" NUM_DOC ")} />
                        </div>

                        <div>

                        </div>


                        <h1 className="TITULO_2"> CONTACTO EMERGENCIA </h1>

                        <div>

                        </div>

                        <div className='cont_input'>
                            <label for = "nom2" className='sub_titulos'> NOMBRES: </label>
                            <input id = "nom2" className='inputs' type="text" placeholder="" {...register(" NOMBRES2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "cel2" className='sub_titulos'> CELULAR: </label>
                            <input id = "cel2" className='inputs' type="number" placeholder="" {...register(" CELULAR2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "ape_1.2" className='sub_titulos'> APELLIDO 1: </label>
                            <input id = "ape_1.2" className='inputs' type="text" placeholder="" {...register(" APELLIDO3  ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "ape_2.2" className='sub_titulos'> APELLIDO 2: </label>
                            <input id = "ape_2.2" className='inputs' type="text" placeholder="" {...register(" APELLIDO4 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "rh" className='sub_titulos'> RH: </label>
                            <input id = "rh" className='inputs' type="text" placeholder="" {...register(" RH2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label for = "parentesco" className='sub_titulos'> PARENTESCO: </label>
                            <input id = "parentesco" className='inputs' type="text" placeholder="" {...register(" PARENTESCO ")} />
                        </div>

                    </form>


                </section>
            </section>
        </>
    )
}

export default Formulario