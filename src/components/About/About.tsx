import { Transition } from "../Transition";
import Image from "next/image";
import { FaHome, FaUsers, FaGlobe } from "react-icons/fa";

export function About() {
    return (
        <Transition>
            <div className=" py-16 md:py-24" id="about">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                        <div className="lg:w-1/2 max-w-2xl">
                            <h4 className="text-secondary font-semibold text-lg mb-2">Sobre nosotros</h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Más de 1.000 viviendas en todo el mundo para vender y comprar
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illum aut, id culpa quidem illo tempore rerum magnam reiciendis nihil quisquam doloribus est autem vel sapiente cum voluptatum tenetur. Et.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center">
                                    <FaHome className="text-4xl text-secondary mx-auto mb-2" />
                                    <p className="font-semibold">1000+</p>
                                    <p className="text-sm text-gray-500">Propiedades</p>
                                </div>
                                <div className="text-center">
                                    <FaUsers className="text-4xl text-secondary mx-auto mb-2" />
                                    <p className="font-semibold">500+</p>
                                    <p className="text-sm text-gray-500">Clientes Satisfechos</p>
                                </div>
                                <div className="text-center">
                                    <FaGlobe className="text-4xl text-secondary mx-auto mb-2" />
                                    <p className="font-semibold">50+</p>
                                    <p className="text-sm text-gray-500">Países</p>
                                </div>
                            </div>
                            <button className="px-6 py-3 text-white font-semibold transition-all duration-300 rounded-full bg-secondary hover:bg-black hover:shadow-lg transform hover:scale-105">
                                Explorar Propiedades
                            </button>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src="/assets/inter-hause.jpg" 
                                    alt="Nuestra propiedad destacada" 
                                    width={300} 
                                    height={250} 
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute top-10 -right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
}