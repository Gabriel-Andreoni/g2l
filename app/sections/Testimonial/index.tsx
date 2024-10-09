import Image from 'next/image';

import TestimonialsCover from './img/testimonials-cover.jpg'

export default function Testimonial() {
    return (
        <section className="mt-28 desktop:h-screen mobile:h-auto relative overflow-hidden after:content-[''] after:w-4/12 desktop:after:h-4/6 after:block after:absolute  after:bg-[#01D6A3] after:z-[-1] desktop:after:top-16 desktop:after:left-[80%] mobile:after:h-60 mobile:after:left-0 mobile:after:top-0">
            <div className="max-w-7xl h-full mx-auto mobile:p-4 desktop:py-28 flex desktop:flex-row mobile:flex-col">
                <div className="desktop:w-3/6 mobile:w-full flex flex-col">
                    <div className="w-full flex flex-col">
                        <h6 className="mb-4 mobile:mt-10 desktop:mt-0 text-2xl font-black text-[#01D6A3]">Depoimentos</h6>
                        <h2 className="mb-6 text-4xl font-black text-[#033B4A]">O que nossos clientes dizem</h2>
                        <p className="w-10/12 text-balance text-[#636B6E]">Veja o que nossos clientes dizem sobre a experiência com a G2L</p>
                        <p className="w-10/12 ml-[1px] text-balance text-[#636B6E]">e como ajudamos a transformar seus negócios no ambiente digital.</p>
                    </div>
                    <div className="w-full desktop:p-4 mobile:p-0 mt-10 flex desktop:flex-row mobile:flex-col gap-4">
                        <div className="desktop:w-3/6 mobile:w-full flex flex-col">
                            <p className="mb-auto desktop:text-sm mobile:text-md font-medium text-[#636B6E] mobile:text-pretty desktop:text-wrap">Trabalhar com a G2L foi uma experiência incrível. Eles captaram exatamente o que nossa empresa precisava e transformaram nossa visão em um site dinâmico e intuitivo. O suporte contínuo e a atenção aos detalhes nos impressionaram muito. Recomendo sem hesitar!</p>
                            <span className="mt-10">
                                <h2 className="text-2xl font-black text-[#01D6A3]">Walmor S.</h2>
                                <h6 className="mobile:mb-10 desktop:mb-0 text-md font-black text-[#033B4A]">CEO da TechWave Solutions</h6>
                            </span>
                        </div>

                        <div className="desktop:w-3/6 mobile:w-full flex flex-col">
                            <p className="mb-auto desktop:text-sm mobile:text-md font-medium text-[#636B6E] mobile:text-pretty desktop:text-wrap">A equipe da G2L superou todas as nossas expectativas! O aplicativo que desenvolveram para nossa marca trouxe mais engajamento e melhorou a experiência do usuário. Estamos muito felizes com os resultados e a parceria construída!</p>
                            <span className="mt-10">
                                <h2 className="text-2xl font-black text-[#01D6A3]">Ana C.</h2>
                                <h6 className="mobile:mb-10 desktop:mb-0 text-md font-black text-[#033B4A]">Fundadora da Lumina Design</h6>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="desktop:w-3/6 mobile:w-full relative desktop:order-[0] mobile:order-[-1] after:content-[''] after:w-full desktop:after:h-[350px] mobile:after:h-[200px] after:block after:absolute after:top-0 after:bg-[#01D6A3] after:opacity-20">
                    <Image src={TestimonialsCover} alt="imagem de uma pessoa com um tablet na mão escrevendo um testemunho" />
                </div>
            </div>
        </section>
    )
}