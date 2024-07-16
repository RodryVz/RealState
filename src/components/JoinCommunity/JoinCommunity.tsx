import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";
import { Lumiflex } from "uvcanvas";

export function JoinCommunity() {
    return (
        <Transition className="grid items-center px-2 py-6 md:py-24 md:px-36 md:grid-cols-2 bg-secondary">
            <h3 className="max-w-lg text-4xl font-semibold text-white">Únete a nuestra comunidad</h3>
            <div className="mx-auto mt-5 md:mx-auto">
                <button className="flex items-center justify-between py-4 text-white transition-all duration-100 bg-black rounded-lg px-7 w-fit hover:bg-black/70">
                   <FaRegPaperPlane/>
                   <span className="ml-3">Únete a la comunidad</span>
                </button>
            </div>
        </Transition>
    )
}