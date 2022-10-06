import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="bg-dark text-white">
            <div className="container">
                <div className="row bg-dark text-white p-5">
                    
                    <div className="columnasfooter-brand d-flex align-items-center col-xs-12 col-md-6 col-lg-3">
                        <p className="fs-1" >Mugiwara's</p>
                    </div>

                    <div className="columnasfooter col-xs-12 col-md-6 col-lg-3">
                        <p className="fs-3">Servicios</p>
                        <div>
                            <Link to="/" className="fs-5 text-white text-decoration-none" >Delivery</Link>
                        </div>
                        <div>
                            <Link to="/" className="fs-5 text-white text-decoration-none" >Retiro</Link>
                        </div>
                        <div>
                            <Link to="/" className="fs-5 text-white text-decoration-none" >Términos y condiciones</Link>
                        </div>
                    </div>


                    <div className="columnasfooter col-xs-12 col-md-6 col-lg-3">
                        <p className="fs-3 text-center mb-5">Redes sociales</p>
                        <ul className="fontawesome d-flex justify-content-between">
                            <Link to="/"><i class="fa-brands fa-square-facebook"></i></Link>
                            <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                            <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                            <Link to="/"><i class="fa-brands fa-tiktok"></i></Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer