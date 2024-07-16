import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <div className='px-4 py-6 bg-black/90 md:py-20 md:px-36'>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-[1fr, 1fr, 1fr,_400px] text-white'>
                {dataFooter.map(({id, links})=>(
                    <div key={id}>
                        {links.map(({id, name, link})=>(
                            <Link key={id} href={link} className="block mb-4">{name}</Link>
                        ))}
                    </div>
                ))}
                <div className='md:text-right'>
                    <h4 className='mb-4 text-xl font-semibold'>Real State</h4>
                    <p>Calle Siempre Vivas</p>
                    <p>Madrid, Spain</p>
                    <div className='flex gap-4 mt-4 md:justify-end'>
                       <LiaInstagram className='text-2xl cursor-pointer' href='#!'/>
                       <LiaLinkedinIn className='text-2xl cursor-pointer' href='#!'/>
                       <LiaPinterestP className='text-2xl cursor-pointer' href='#!'/>
                       <LiaYoutube className='text-2xl cursor-pointer' href='#!'/>
                    </div>
                </div>
            </div>
        </div>
    )
}