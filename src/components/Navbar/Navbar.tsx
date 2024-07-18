import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export function Navbar(props: NavbarProps) {
    const { openMobileMenu } = props;
    const [isScrolling, setIsScrolling] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight - 600) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <AnimatePresence>
            {isScrolling ? (
                <motion.nav
                    key={1}
                    variants={animationNavbar}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed z-[9999] right-0 left-0 mx-auto top-6 w-fit"
                >
                    <div className="px-6 py-3 bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg">
                        <div className="flex items-center gap-6">
                            {dataHeader.map(({ id, name, link }) => (
                                <Link 
                                    key={id} 
                                    href={link} 
                                    className="text-white hover:text-secondary transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.nav>
            ) : (
                <div className={`
                    ${openMobileMenu 
                        ? 'absolute z-[1] left-0 top-20 right-0 w-full bg-white shadow-lg' 
                        : 'hidden'
                    } 
                    md:flex md:items-center md:gap-6
                `}>
                    {dataHeader.map(({ id, name, link }) => (
                        <Link 
                            key={id} 
                            href={link} 
                            className="block py-2 px-4 md:px-0 text-gray-800 hover:text-secondary hover:bg-gray-100 md:hover:bg-transparent transition-colors duration-300"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </AnimatePresence>
    )
}

const animationNavbar = {
    initial: {
        y: -20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 100,
            damping: 20,
            type: "spring"
        }
    },
    exit: {
        y: -20,
        opacity: 0
    }
}