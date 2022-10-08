import { Fragment } from "react"
import { useState } from "react"
import Swal from 'sweetalert2'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import contacto1 from '../assets/images/contacto1.jpg'
import contacto2 from '../assets/images/contacto2.jpg'
import contacto3 from '../assets/images/contacto3.jpg'
import Spinner from "./Spinner"


const Formulario = () => {

    const valorInicial = {
        name: '',
        email: '',
        content: ''
    }

    const [llenarFormulario, setLlenarFormulario] = useState(valorInicial)
    const [guardandoMensaje, setGuardandoMensaje] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    

    const handleInput = (evento) => {
        const { value, name } = evento.target
        setLlenarFormulario({
            ...llenarFormulario,
            [name]: value
        })
    }


    const guardarMensaje = async (evento) => {
        evento.preventDefault()
        try {
            setGuardandoMensaje(true)
            await addDoc(collection(db, 'mensajes'), {
                ...llenarFormulario
            })
            setGuardandoMensaje(false)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Mensaje enviado',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: 'Algo salío mal, intente más tarde',
            })
        }

        setLlenarFormulario({...valorInicial})
    }

    return (
        <Fragment>
            <div className="contact row">
                
                        <h1 className="titulocomponenteformulario"> Contacto </h1>
                        <p className="titulocomponenteformulario fs-4">Tienes alguna pregunta o sugerencia? Escríbenos!.</p>
                        <p className="titulocomponenteformulario fs-4">NO HACEMOS RESERVAS</p>
                        <p className="titulocomponenteformulario fs-4">Atendemos solo por orden de llegada</p>

                <div className="container p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={contacto1} alt="..." className='tamaño-image-comp-form' />
                            </div>
                            <div className="carousel-item">
                                <img src={contacto2} alt="..." className='tamaño-image-comp-form' />
                            </div>
                            <div className="carousel-item">
                                <img src={contacto3} alt="..." className='tamaño-image-comp-form' />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Adelante</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Atrás</span>
                        </button>
                    </div>
                </div>

                <div className="formulario col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <form onSubmit={guardarMensaje}>
                        <label htmlFor='name'>Nombre completo:</label>
                        <input
                            className="form-label"
                            type='text'
                            name="name"
                            id="name"
                            onChange={handleInput}
                            value={llenarFormulario.name}
                            required
                        />

                        <label htmlFor='email'>Correo electrónico:</label>
                        <input
                            className="form-label"
                            type='email'
                            name="email"
                            id="email"
                            onChange={handleInput}
                            value={llenarFormulario.email}
                            required
                        />

                        <label htmlFor='content'>Mensaje:</label>
                        <textarea
                            className="area-texto-form form-control mb-5"
                            type="text"
                            name="content"
                            id="content"
                            onChange={handleInput}
                            value={llenarFormulario.content}
                            required
                        >
                        </textarea>

                        <button
                            className="btn btn-dark"
                            isLoading={isLoading}
                            onClick={()=>{
                                setIsLoading(true)
                                setTimeout(()=>{
                                    setIsLoading(false)
                                },2000)
                            }}
                            desactivado={guardandoMensaje}
                        >
                            {
                                isLoading ? <Spinner /> : 'enviar'
                            }
                        
                        </button>
                    </form>
                </div>

            </div>
        </Fragment>
    )
}

export default Formulario
