import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar miNavbar">
            <div class="container-fluid">
                <div class="logo-navbar d-flex">
                    <img src="https://freepikpsd.com/file/2019/10/luffy-hat-png-5-Transparent-Images.png" alt="Bootstrap" />
                    <h1 className="texto-logo">Mugiwara's</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/' >Inicio</Link>
                        </li>
                        <li>
                            <Link to='/Carta' >Carta</Link>
                        </li>
                        <li>
                            <Link to='/Contacto' >Contacto</Link>
                        </li>
                        <li>
                            <Link to='/Ubicacion' >Ubicación</Link>
                        </li>
                        {/* <li>
                              <Link to='/Reserva' >Reserva una mesa</Link>
                          </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

