import Navbar from '../components/Navbar'
import { Fragment } from 'react'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Ubicacion = () => {
    return(
       <Fragment>
            <Navbar />
            <Map />
            <Footer />
       </Fragment>
    )
}

export default Ubicacion