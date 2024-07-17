import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto pt-4">
            <div className="pt-20 md:pt-0 min-h-[90vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 max-w-4xl text-center text-white px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-down">
                        Descubre la vivienda ideal para tu familia
                    </h2>
                    <p className="mt-4 text-xl md:text-2xl md:mt-8 animate-fade-in-up">
                        Con más de 30 años de experiencia, contamos con los mejores profesionales de Real Estate para lo que necesites
                    </p>
                </div>
                <div className="mt-12 w-full max-w-4xl px-4 animate-fade-in">
                    <FloatedSearch />
                </div>
            </div>
        </div>
    )
}