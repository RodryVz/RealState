
"use client"
import { Transition } from "../Transition"
import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { MarkerHouse } from "./MarkerHouse"

export function Location() {
    const coordinatePoint = {
        lat: 40.463667,
        lng: -3.74922
    }

    const centerMarker = (position: {lat: number, lng: number}, fnMap: Map) => {
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    } 

    return (
        <Transition className="px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
                <h4 className="text-secondary font-semibold text-lg mb-2" id="location">Localización</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
                    Disponible en todas partes del mundo, con la comunidad de propiedades más grande.
                </h2>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-xl">
                <MapContainer 
                    center={coordinatePoint} 
                    zoom={6} 
                    scrollWheelZoom={false} 
                    className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full"
                >
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"/>
                    <MarkerHouse selectMarker={centerMarker}/>
                </MapContainer>
            </div>
        </Transition>
    )
}
