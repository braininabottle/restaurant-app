import Navbar from '../components/Navbar'
import Listaplatos from '../components/Listaplatos'
import Footer from '../components/Footer'
import { Fragment } from 'react'

const Carta = () => {
    return(
        <Fragment>
            <Navbar />   
            <Listaplatos />
            <Footer />
        </Fragment>
    )
    
}

export default Carta