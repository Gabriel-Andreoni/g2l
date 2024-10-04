import Image from 'next/image';

import TestimonialsCover from './img/testimonials-cover.jpg'

export default function Testimonial() {
    return (
        <section className="mt-28 h-screen relative overflow-hidden after:content-[''] after:w-4/12 desktop:after:h-4/6 mobile:after:h-2/6 after:block after:absolute after:top-16 after:-right-28 after:bg-[#01D6A3] after:z-[-1]">
            <div className="max-w-7xl h-full mx-auto py-28 flex">
                <div className="w-3/6 flex flex-col">
                    <div className="w-full flex flex-col">
                        <h6 className="mb-4 text-2xl font-black text-[#01D6A3]">Depoimentos</h6>
                        <h2 className="mb-6 text-4xl font-black text-[#033B4A]">O que nossos clientes dizem</h2>
                        <p className="w-10/12 text-balance text-[#636B6E]">Veja o que nossos clientes dizem sobre a experiência com a G2L</p>
                        <p className="w-10/12 ml-[1px] text-balance text-[#636B6E]">e como ajudamos a transformar seus negócios no ambiente digital.</p>
                    </div>
                    <div className="w-full p-4 mt-10 flex gap-4">
                        <div className="w-3/6 flex flex-col">
                            <p className="mb-auto text-sm font-medium text-[#636B6E]">Trabalhar com a G2L foi uma experiência incrível. Eles captaram exatamente o que nossa empresa precisava e transformaram nossa visão em um site dinâmico e intuitivo. O suporte contínuo e a atenção aos detalhes nos impressionaram muito. Recomendo sem hesitar!</p>
                            <span className="mt-10">
                                <h2 className="text-2xl font-black text-[#01D6A3]">Walmor S.</h2>
                                <h6 className="text-md font-black text-[#033B4A]">CEO da TechWave Solutions</h6>
                            </span>
                        </div>

                        <div className="w-3/6 flex flex-col">
                            <p className="mb-auto text-sm font-medium text-[#636B6E]">A equipe da G2L superou todas as nossas expectativas! O aplicativo que desenvolveram para nossa marca trouxe mais engajamento e melhorou a experiência do usuário. Estamos muito felizes com os resultados e a parceria construída!</p>
                            <span className="mt-10">
                                <h2 className="text-2xl font-black text-[#01D6A3]">Ana C.</h2>
                                <h6 className="text-md font-black text-[#033B4A]">Fundadora da Lumina Design</h6>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-3/6 relative after:content-[''] after:w-full after:h-[359px] after:block after:absolute after:top-0 after:bg-[#01D6A3] after:opacity-30">
                    <Image src={TestimonialsCover} alt="imagem de uma pessoa com um tablet na mão escrevendo um testemunho" />
                </div>
            </div>
        </section>
    )
}