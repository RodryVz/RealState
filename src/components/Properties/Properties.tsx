"use client"

import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia"
import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"
import { useState } from "react"

export function Properties() {
    const [counterHouses, setCounterHouses] = useState(8)
    const dataFilteredHouses = dataProperties.slice(0, counterHouses)

    const loadMoreHouses = () => {
        setCounterHouses(counterHouses + 4)
    }

    return (
        <Transition className="px-4 my-8 md:py-32 md:px-40">
            <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Propiedades Destacadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="propierties">
                {dataFilteredHouses.map(({id, location, price, bedrooms, bathroom, image, star, meters})=>(
                    <Link key={id} href={`/properties/${id}`}
                    className="bg-gray-400 shadow-lg hover:shadow-2xl rounded-3xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                       <div className="relative overflow-hidden rounded-t-3xl">
                           <div className="absolute flex items-center px-3 py-2 rounded-full bg-white top-4 right-4 text-secondary z-10 shadow-md">
                                <LiaStarSolid className="text-yellow-400"/>
                                <span className="ml-1 font-semibold">{star}</span>
                           </div>
                           <Image src={`/assets/properties/${image}`} alt={location} width={400} height={300}
                                className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110" />
                       </div>
                       <div className="p-6 bg-gray-200 rounded-b-3xl">
                            <p className="text-secondary font-medium mb-2">{location}</p>
                            <p className="text-2xl font-bold mb-4 text-gray-800">{formatPrice(price)}</p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <div className="flex items-center px-3 py-2 rounded-full bg-gray-300 text-gray-700 shadow-sm">
                                    <LiaBedSolid className="mr-2"/>
                                    <span>{bedrooms} Dormitorios</span>
                                </div>
                                <div className="flex items-center px-3 py-2 rounded-full bg-gray-300 text-gray-700 shadow-sm">
                                    <LiaBathSolid className="mr-2"/>
                                    <span>{bathroom} Baños</span>
                                </div>
                                <div className="flex items-center px-3 py-2 rounded-full bg-gray-300 text-gray-700 shadow-sm">
                                    <LiaRulerCombinedSolid className="mr-2"/>
                                    <span>{meters} m²</span>
                                </div>
                            </div>
                       </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                {counterHouses < dataProperties.length &&(
                <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-secondary rounded-full hover:bg-black hover:shadow-lg transform hover:scale-105"
            onClick={loadMoreHouses}>Ver más viviendas</button>
            )}
            </div>
        </Transition>
    )
}