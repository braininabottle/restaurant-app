import Navbar from "../components/Navbar"
import { Fragment } from "react"
import {useState } from 'react'
import Formulario from "../components/Formulario"
import Footer from "../components/Footer"

const Contacto = () => {
    return(
        <Fragment>
            <Navbar />
            <Formulario />
            <Footer />
        </Fragment>
    )
}

export default Contacto 