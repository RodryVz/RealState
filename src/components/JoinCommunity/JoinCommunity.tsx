import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";
import { Lumiflex } from "uvcanvas";

export function JoinCommunity() {
    return (
        <Transition>
            <div className="relative overflow-hidden bg-secondary py-16 md:py-24">
                <div className="absolute inset-0 opacity-10">
                    <Lumiflex />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                        <div className="text-center md:text-left md:w-1/2">
                            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                                Únete a nuestra<br />
                                <span className="text-purple-700">comunidad exclusiva</span>
                            </h3>
                            <p className="text-gray-200 text-lg max-w-md mx-auto md:mx-0">
                                Obtén acceso a ofertas exclusivas, consejos de expertos y eventos especiales.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-full overflow-hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-secondary">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                                <FaRegPaperPlane className="mr-3 text-purple-800 group-hover:animate-bounce" />
                                <span>Únete a la comunidad</span>
                                <span className="absolute right-0 translate-x-full group-hover:translate-x-0 transition-transform duration-200">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
}