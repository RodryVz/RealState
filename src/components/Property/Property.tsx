import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { Form } from "../Form";

export function Property(props: PropertyProps) {
    const { house } = props;

    return (
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12">
                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-0">
                            House {house.id}
                        </h1>
                        <span className="text-2xl md:text-3xl font-semibold text-secondary">
                            {formatPrice(house.price)}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <h2 className="flex items-center text-lg text-gray-600">
                            <TfiLocationPin className="mr-2 text-secondary" />
                            {house.location}
                        </h2>
                        <div className="flex items-center px-3 py-1 rounded-full bg-secondary text-white">
                            <LiaStarSolid className="mr-1 text-yellow-400" />
                            <span className="font-semibold">{house.star}</span>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image 
                            src={`/assets/properties/${house.image}`}
                            alt={`Casa en ${house.location}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {[
                            { icon: LiaBedSolid, value: house.bedrooms, label: "Dormitorios" },
                            { icon: LiaBathSolid, value: house.bathroom, label: "Baños" },
                            { icon: LiaRulerCombinedSolid, value: house.meters, label: "m²" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
                                <item.icon className="mr-2 text-secondary" />
                                <span className="font-semibold">{item.value}</span>
                                <span className="ml-1 text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed">{house.description}</p>

                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ubicación</h3>
                        <p className="text-gray-600">{house.location}</p>
                    </div>
                </div>

                <div>
                    <Form />
                </div>
            </div>
        </main>
    )
}