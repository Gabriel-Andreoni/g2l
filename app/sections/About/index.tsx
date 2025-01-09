import Image from "next/image";

import AboutImage from './img/about-image.jpg';
import AboutIcon1 from './img/about-icon-1.png';
import AboutIcon2 from './img/about-icon-2.png';

export default function About() {
    return (
        <section className="w-full h-auto desktop:mb-0 mobile:mb-8 p-4 relative after:content-[''] after:w-4/12 desktop:after:h-full mobile:after:h-2/6 after:block after:absolute after:top-0 after:left-0 after:bg-[#01D6A3] after:z-[1]" id="about">
            <div className="w-full desktop:py-14 mobile:py-0 flex desktop:flex-row mobile:flex-col z-10 relative">
                <div className="desktop:w-3/6 mobile:w-full desktop:mt-0 mobile:mt-4 flex justify-center items-start">
                    <Image src={AboutImage} alt="imagem de um escritório" width="620" height="490" />
                </div>
                <div className="desktop:w-3/6 mobile:w-full desktop:my-0 mobile:my-8 flex flex-col">
                    <h6 className="desktop:mb-4 mobile:mb-12 text-2xl font-black desktop:text-[#01D6A3] mobile:text-white">Sobre a <span className="desktop:text-[#01D6A3] mobile:text-[#033B4A]">G2L</span></h6>
                    <h2 className="mb-8 flex flex-col text-4xl font-black text-[#033B4A] text-balance">
                        Inovação Digital
                        <span> que Transforma Negócios</span>
                    </h2>
                    <p className="desktop:mb-1 mobile:mb-3 text-[#636B6E] leading-16">Na G2L, nosso objetivo é ajudar empresas de todos os tamanhos a conquistarem o ambiente digital com soluções personalizadas de sites e aplicativos.</p>

                    <p className="mb-8 text-[#636B6E] leading-16">
                        Com uma equipe de especialistas apaixonados por tecnologia, design e inovação, entregamos projetos que elevam a presença digital de nossos clientes, proporcionando uma experiência única para os usuários.
                    </p>

                    <div className="w-full flex">
                        <span className="desktop:mr-32 mobile:mr-20 flex flex-col gap-4">
                            <Image src={AboutIcon1} alt="ícone de uma pessoa criativa" width="60" height="60" />
                            <h6 className="font-black text-[#033B4A]">Experiência Criativa</h6>
                        </span>

                        <span className="flex flex-col gap-4">
                            <Image src={AboutIcon2} alt="ícone de uma pessoa criativa" width="60" height="60" />
                            <h6 className="font-black text-[#033B4A]">Rápido Suporte</h6>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}