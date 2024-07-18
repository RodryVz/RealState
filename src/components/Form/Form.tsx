import Image from "next/image"

export function Form() {
    return (
        <div className="sticky top-8 mt-12 lg:mt-24">
            <div className="bg-gradient-to-br from-secondary to-purple-600 text-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-white/10 backdrop-blur-sm p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <Image 
                            src="/assets/comercial.png" 
                            alt="Comercial" 
                            width={70} 
                            height={70} 
                            className="border-3 rounded-full border-white shadow-lg"
                        />
                        <div>
                            <p className="font-bold text-xl">Pablo Garcia</p>
                            <p className="font-medium text-white/80">Asesor Comercial</p>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Nombre</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="w-full rounded-md border-0 bg-white/20 placeholder-white/50 text-white focus:ring-2 focus:ring-white"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone" 
                                className="w-full rounded-md border-0 bg-white/20 placeholder-white/50 text-white focus:ring-2 focus:ring-white"
                                placeholder="Tu teléfono"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-white/90 mb-1">Mensaje</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="w-full rounded-md border-0 bg-white/20 placeholder-white/50 text-white focus:ring-2 focus:ring-white"
                                placeholder="Tu mensaje..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-white text-secondary font-bold py-3 px-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Contactar Ahora
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}