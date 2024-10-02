import Image from 'next/image';

import TestimonialsCover from './img/testimonials-cover.jpg'

export default function Testimonial() {
    return (
        <section className="mt-28 h-screen">
            <div className="max-w-7xl h-full mx-auto py-28 flex">
                <div className="w-3/6 flex flex-col">
                    <h6></h6>
                </div>

                <div className="w-3/6 relative after:content-[''] after:w-full after:h-[359px] after:block after:absolute after:top-0 after:bg-[#01D6A3] after:opacity-30">
                    <Image src={TestimonialsCover} alt="imagem de uma pessoa com um tablet na mão escrevendo um testemunho" />
                </div>
            </div>
        </section>
    )
}