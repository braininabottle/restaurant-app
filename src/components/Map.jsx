import "leaflet/dist/leaflet.css"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'




const Map = () => {

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('../assets/images/markericon2x.png'),
        iconUrl: require('../assets/images/markericon.png'),
        shadowUrl: require('../assets/images/markershadow.png')
    });
    
    const ubicacion = [-33.421576, -70.610845]
    const zoom = 16
    
    return(  
        <div className="row">
            <h1 className="title-ubicacion text-center fs-1 p-4 mb-0">Ubicación</h1>
            <div className="container map-container col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                <MapContainer center={ubicacion} zoom={zoom} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={ubicacion}>
                        <Popup>Av. Ricardo Lyon 76</Popup>
                    </Marker>
                </MapContainer>
            </div> 
            <div className="map-descr col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="descr">
                    <h1 className="fs-3 fw-bold">Mugiwara's Lyon</h1>
                    <p className="fs-4">Av. Ricardo Lyon 76</p>
                    <p className="fs-4">Providencia, Región Metropolitana</p>
                    <h3 className="fs-3 fw-bold">Teléfono:</h3>
                    <p className="fs-4">+56 22 857 0635</p>
                    <h3 className="fs-3 fw-bold">Horario:</h3>
                    <p className="fs-4">Lunes a Viernes – Atención en terrazas e interior del local 08:00 a 23:00 hrs (cierre cocina 22:30 hrs)</p>
                    <p className="fs-4">Sábado, Domingo y Feriados – Atención en terrazas e interior del local 09:00 a 23:00 hrs (cierre cocina 22:30 hrs)</p>
                </div>
            </div>
        </div>
    )
}

export default Map

