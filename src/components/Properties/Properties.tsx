"use client"

import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaStarSolid } from "react-icons/lia"
import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"

export function Properties() {

    return (
        <Transition className="px-4 my-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataProperties.map(({id, location, price, bedrooms, bathroom, image, star, meters})=>(
                    <Link key={id} href={"/properties/${id}"}
                    className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer">
                       <div className="relative -z-[1]">
                           <div className="relative">
                               <div className="absolute flex item-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                                    <LiaStarSolid/>
                                    <span className="ml-1 font-semibold"></span>
                               </div>
                               <Image src={`/assets/properties/${image}`} alt="Location" width={150} height={150}
                                    className="object-cover w-full max-h-full h-[200px] rounded-2xl" />
                                <div className="px-3 py-5">
                                    <p className="text-secondary">{location}</p>
                                    <p className="font-semibold">{formatPrice(price)}</p>
                                </div>
                           </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Transition>
    )
}
