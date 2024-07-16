import { Lumiflex } from "uvcanvas";
import { Transition } from "../Transition";
import Image from "next/image";

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Más de 1.000 viviendas en todo el mundo para vender y comprar</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illum aut, id culpa quidem illo tempore rerum magnam reiciendis nihil quisquam doloribus est autem vel sapiente cum voluptatum tenetur. Et.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar más</button>
            </div>
            <div>
                <Image src="/assets/house.jpeg" alt="about" width={350} height={450} className="w-auto h-auto" priority/>
            </div>
        </Transition>
    )
}
