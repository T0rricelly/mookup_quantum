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
                            <label htmlFor ="nomb" className='sub_titulos'> NOMBRES: </label>
                            <input id="nomb" className='inputs' type="text" placeholder="" {...register(" NOMBRES1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "cel" className='sub_titulos'> CELULAR: </label>
                            <input id="cel" className='inputs' type="number" placeholder="" {...register(" CELULAR1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "ape_1" className='sub_titulos'> APELLIDO 1: </label>
                            <input id = "ape_1" className='inputs' type="text" placeholder="" {...register(" APELLIDO1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "ape_2" className='sub_titulos'> APELLIDO 2: </label>
                            <input id = "ape_2" className='inputs' type="text" placeholder="" {...register(" APELLIDO2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "eps" className='sub_titulos'> EPS: </label>
                            <input id = "eps" className='inputs' type="text" placeholder="" {...register(" EPS ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "arl" className='sub_titulos'> ARL: </label>
                            <input id = "arl" className='inputs' type="text" placeholder="" {...register(" ARL ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "rh" className='sub_titulos'> RH: </label>
                            <input id = "rh" className='inputs' type="text" placeholder="" {...register(" RH1 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "dir" className='sub_titulos'> DIRECCION: </label>
                            <input id = "dir" className='inputs' type="text" placeholder="" {...register(" DIRECCION")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "est_civil" className='sub_titulos'> ESTADO CIVIL: </label>
                            <input id = "est_civil" className='inputs' type="text" placeholder="" {...register(" ESTADO CIVIL ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "tipo_doc" className='sub_titulos'> TIPO DE DOCUMENTO: </label>
                            <input id = "tipo_doc" className='inputs' type="text" placeholder="" {...register(" TIPO_DOC ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "num_doc" className='sub_titulos'> NUMERO DE DOCUMENTO: </label>
                            <input id = "num_doc" className='inputs' type="number" placeholder="" {...register(" NUM_DOC ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "grupo_sanguineo" className='sub_titulos'> GRUPO SANGUINEO: </label>
                            <input id = "grupo_sanguineo" className='inputs' type="text" placeholder="" {...register(" GRUPO SANGUINEO ")} />
                        </div>


                        <h1 className="TITULO_2"> DATOS DE CONTRATO </h1>

                        <div>

                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "fecha_inicio" className='sub_titulos'> FECHA INICIO: </label>
                            <input id = "fecha_inicio" className='inputs' type="text" placeholder="" {...register(" FECHA INICIO ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "fecha_fin" className='sub_titulos'> FECHA FIN: </label>
                            <input id = "fecha_fin" className='inputs' type="number" placeholder="" {...register(" FECHA FIN ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "tipo_contrato" className='sub_titulos'> TIPO DE CONTRATO: </label>
                            <input id = "tipo_contrato" className='inputs' type="text" placeholder="" {...register(" TIPO DE CONTRATO  ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "area" className='sub_titulos'> AREA: </label>
                            <input id = "area" className='inputs' type="text" placeholder="" {...register(" AREA ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "salario" className='sub_titulos'> SALARIO: </label>
                            <input id = "salario" className='inputs' type="text" placeholder="" {...register(" SALARIO ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "horario" className='sub_titulos'> HORARIO: </label>
                            <input id = "horario" className='inputs' type="text" placeholder="" {...register(" HORARIO ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "estado_contrato" className='sub_titulos'> ESTATO CONTRATO: </label>
                            <input id = "estado_contrato" className='inputs' type="text" placeholder="" {...register(" ESTADO CONTRATO ")} />
                        </div>

                        <div>
                            
                        </div>

                        <h1 className="TITULO_2"> CONTACTO EMERGENCIA </h1>

                        <div>

                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "nom2" className='sub_titulos'> NOMBRES: </label>
                            <input id = "nom2" className='inputs' type="text" placeholder="" {...register(" NOMBRES2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "cel2" className='sub_titulos'> CELULAR: </label>
                            <input id = "cel2" className='inputs' type="number" placeholder="" {...register(" CELULAR2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "ape_1.2" className='sub_titulos'> APELLIDO 1: </label>
                            <input id = "ape_1.2" className='inputs' type="text" placeholder="" {...register(" APELLIDO3  ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "ape_2.2" className='sub_titulos'> APELLIDO 2: </label>
                            <input id = "ape_2.2" className='inputs' type="text" placeholder="" {...register(" APELLIDO4 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "rh" className='sub_titulos'> RH: </label>
                            <input id = "rh" className='inputs' type="text" placeholder="" {...register(" RH2 ")} />
                        </div>

                        <div className='cont_input'>
                            <label htmlFor = "parentesco" className='sub_titulos'> PARENTESCO: </label>
                            <input id = "parentesco" className='inputs' type="text" placeholder="" {...register(" PARENTESCO ")} />
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Formulario