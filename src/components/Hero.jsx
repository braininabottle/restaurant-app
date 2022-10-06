import ramen1 from '../assets/images/ramen1.jpg'
import ramen2 from '../assets/images/ramen2.jpg'
import ramen3 from '../assets/images/ramen3.jpg'
import {Link} from 'react-router-dom'

const Hero = () => {
   return (
      <div className="hero row">

         <div className="container p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src={ramen1} alt="..." className='tamaño-image' />
                  </div>
                  <div className="carousel-item">
                     <img src={ramen2} alt="..." className='tamaño-image' />
                  </div>
                  <div className="carousel-item">
                     <img src={ramen3} alt="..." className='tamaño-image' />
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
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h1 className='titulocomponentehero text-center mt-5 p-4'>Visita nuestro restaurant</h1>
            <p className='titulocomponentehero fs-4'>
            El ramen debe su origen a la gastronomía china. La que fuera consumida por sus habitantes como una sencilla sopa de fideos cortados, con huesos de ternera, se convirtió, tras la Segunda Guerra Mundial, en un alimento fundamental para los japoneses.
            </p>
            <div className='center'>
              <Link to='/Carta'>
              <button 
               className='boton-menu btn btn-warning btn-lg mt-5 mb-5 fw-bold rounded-pill'
               >
                  Menú
               </button>
              </Link>
               
            </div>
         </div>
      </div>
   )
}

export default Hero