"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"


export function Services() {
    return (
        <Transition className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="max-w-xl" id="services">
                        <h4 className="text-secondary font-semibold text-lg mb-2">Nuestros Servicios</h4>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            Promociona tu vivienda para alquilarla o venderla
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Ofrecemos soluciones integrales para promocionar tu propiedad de manera efectiva. 
                            Nuestro equipo de expertos utiliza estrategias de marketing innovadoras y 
                            tecnología de punta para maximizar la visibilidad de tu vivienda en el mercado.
                        </p>
                        <button className="bg-secondary text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 hover:bg-black">
                            Conoce más
                        </button>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        <Slider />
                    </div>
                </div>
            </div>
        </Transition>
    )
}