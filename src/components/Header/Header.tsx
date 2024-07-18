import { useState } from "react"
import Link from "next/link"
import { CiMenuFries as MenuIcon } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import { Navbar } from "../Navbar"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    return (
        <header className="bg-purple-200 shadow-md">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <h1 className="text-2xl font-bold text-secondary">Real Estate</h1>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Navbar openMobileMenu={openMobileMenu} />
                    </div>

                    <div className="flex items-center gap-4">
                        <Link 
                            href="tel:362458554" 
                            className="group flex items-center gap-2 text-gray-600 hover:text-secondary transition-colors duration-300"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="relative">
                                <BsTelephone className={`text-2xl transition-all duration-300 ${isHovering ? 'rotate-12 scale-110' : ''}`} />
                                {isHovering && (
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                                )}
                            </div>
                            <span className="hidden md:block font-medium group-hover:underline">+5436248855996</span>
                        </Link>
                        
                        <button 
                            className="md:hidden text-gray-600 hover:text-secondary transition-colors duration-300"
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        >
                            <MenuIcon className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {openMobileMenu && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Navbar openMobileMenu={openMobileMenu} />
                    </div>
                </div>
            )}
        </header>
    )
}