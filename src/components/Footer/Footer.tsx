import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className='bg-gray-800 text-gray-300'>
            <div className='container mx-auto px-4 py-12 md:py-20'>
                <div className='grid gap-8 md:grid-cols-4 lg:grid-cols-5'>
                    {dataFooter.map(({id, links}) => (
                        <div key={id} className="space-y-4">
                            {links.map(({id, name, link}) => (
                                <Link 
                                    key={id} 
                                    href={link} 
                                    className="block hover:text-white transition duration-300"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div className='md:col-span-2 lg:col-span-2'>
                        <h4 className='text-2xl font-bold text-white mb-6'>Real State</h4>
                        <p className='mb-2'>Calle Siempre Vivas</p>
                        <p className='mb-6'>Madrid, Spain</p>
                        <div className='flex gap-6'>
                            <a href="#!" className="hover:text-white transition duration-300">
                                <LiaInstagram className='text-3xl' />
                            </a>
                            <a href="#!" className="hover:text-white transition duration-300">
                                <LiaLinkedinIn className='text-3xl' />
                            </a>
                            <a href="#!" className="hover:text-white transition duration-300">
                                <LiaPinterestP className='text-3xl' />
                            </a>
                            <a href="#!" className="hover:text-white transition duration-300">
                                <LiaYoutube className='text-3xl' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mt-12 pt-8 border-t border-gray-700 text-center'>
                    <p>&copy; {new Date().getFullYear()} Real State. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}