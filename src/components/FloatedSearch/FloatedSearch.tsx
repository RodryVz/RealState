import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
    return (
        <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 mx-auto w-[90%] max-w-4xl">
            <div className="flex-col justify-between gap-4 py-4 bg-white rounded-md md:flex md:flex-row backdrop-blur-0 shadow-light">
               <SearchLocation/>
               <SearchProperty/>
               <SearchPriceRange/>
               <SearchButton/>
            </div>
        </Transition>
    )
}
