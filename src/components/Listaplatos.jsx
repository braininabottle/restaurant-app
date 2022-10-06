import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { Fragment } from "react";
import Swal from 'sweetalert2'
import Spinner from "./Spinner";

const Listaplatos = () => {

    const [menu, setMenu] = useState([])
    const [tragos, setTragos] = useState([])
    const [postres, setPostres] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        const obtenerMenu = async () => {
            try {
                const dataMenu = collection(db, 'carta')
                const snapshots = await getDocs(dataMenu)

                const docs = snapshots.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id
                    return data;
                })

                setMenu(docs)

            } catch (error) {
                
            }
        }

        obtenerMenu()

        const obtenerTragos = async () => {
            try {
                const dataTragos = collection(db, 'tragos')
                const snapshots = await getDocs(dataTragos)

                const docs = snapshots.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id
                    return data;
                })

                setTragos(docs)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerTragos()

        const obtenerPostres = async () => {
            try {
                const dataPostres = collection(db, 'postres')
                const snapshots = await getDocs(dataPostres)

                const docs = snapshots.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id
                    return data;
                })

                setPostres(docs)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerPostres()


    }, [])

    return (
      <Fragment>
        <h1 
        className="titulo-menu mt-3 text-center">
        </h1>
        <h2 className="parrafo-menu text-center mt-3 mb-3">Nuestros diferentes tipos de ramen</h2>
            <div className="contenedor-platos row">
                {
                    menu.map(carta => (
                        <div className="tarjeta col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
                            <img src={carta.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="texto-tarjetas card-title mt-3 fw-bold">{carta.name}</h5>
                                <p className="texto-tarjetas card-text mt-4"><i>{carta.description}</i></p>
                                <p className="texto-tarjetas card-text mt-4 fw-bold">Precio: $ {carta.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className="titulo-menu mt-3 text-center">Tragos</h1>
        <h2 className="parrafo-menu text-center mt-3 mb-3">Nuestros diferentes tipos de tragos</h2>
            <div className="contenedor-platos row">
                {
                    tragos.map(carta => (
                        <div className="tarjeta col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
                            <img src={carta.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="texto-tarjetas card-title mt-3 fw-bold">{carta.name}</h5>
                                <p className="texto-tarjetas card-text mt-4"><i>{carta.description}</i></p>
                                <p className="texto-tarjetas card-text mt-4 fw-bold">Precio: $ {carta.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className="titulo-menu mt-3 text-center">Postres</h1>
        <h2 className="parrafo-menu text-center mt-3 mb-3">Nuestros diferentes tipos de postres</h2>
            <div className="contenedor-platos row">
                {
                    postres.map(carta => (
                        <div className="tarjeta col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
                            <img src={carta.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="texto-tarjetas card-title mt-3 fw-bold">{carta.name}</h5>
                                <p className="texto-tarjetas card-text mt-4"><i>{carta.description}</i></p>
                                <p className="texto-tarjetas card-text mt-4 fw-bold">Precio: $ {carta.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    </Fragment> 
    )
}

export default Listaplatos