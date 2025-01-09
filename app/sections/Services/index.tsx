import Image from "next/image";
import cardImage1 from './img/services-card-image-1.png';
import cardImage2 from './img/services-card-image-2.png';
import cardImage3 from './img/services-card-image-3.png';
import cardImage4 from './img/services-card-image-4.png';
import cardImage5 from './img/services-card-image-5.png';
import Link from "next/link";


export default function Services() {
    return (
        <section className="w-full h-auto" id="services">
            <div className="max-w-7xl h-full mx-auto py-28 flex flex-col gap-4">
                <div className="w-full flex desktop:flex-row mobile:flex-col">
                    <div className="desktop:w-3/6 mobile:w-full p-4 flex flex-col items-start justify-center">
                        <h6 className="mb-1 text-[#01D6A3] text-xl font-black">Nossos serviços</h6>
                        <h2 className="mb-8 text-4xl text-[#033B4A] font-black">Soluções Digitais sob Medida para o Seu Sucesso</h2>
                        <p className="desktop:w-11/12 mobile:w-full font-medium text-[#636B6E]">Na G2L, oferecemos soluções digitais inovadoras e personalizadas para o seu negócio. Criamos sites e aplicativos que unem design moderno e funcionalidade, focados em resultados.</p>
                    </div>

                    <div className="desktop:w-3/6 mobile:w-full desktop:pl-2 flex desktop:flex-row mobile:flex-col gap-4">
                        <div className="desktop:w-3/6 mobile:w-11/12 mobile:mx-auto p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                            <div className="w-full mt-4 flex justify-center">
                                <Image src={cardImage1} alt="imagem de uma tela em construção" width="97" height="100" />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-center font-bold">Desenvolvimento de Sites</h2>
                                <p className="mb-4 text-center  text-[#636B6E] text-md">Sites personalizados e responsivos, otimizados para SEO, com design focado na melhor performance e visibilidade online.</p>
                            </div>
                        </div>

                        <div className="desktop:w-3/6 mobile:w-11/12 mobile:mx-auto p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                            <div className="w-full mt-4 flex justify-center">
                                <Image src={cardImage5} alt="imagem de uma tela em construção" width="97" height="100" />
                            </div>
                            <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                                <h2 className="text-center font-bold text-pretty">Desenvolvimento de Sites em WordPress</h2>
                                <p className="mb-4 text-center text-[#636B6E] text-md">Sites dinâmicos e fáceis de gerenciar, utilizando WordPress. Responsivos e otimizados para melhorar sua presença digital.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex desktop:flex-row mobile:flex-col  gap-4">
                    <div className="desktop:w-1/4 mobile:w-11/12 mobile:mx-auto p-3 flex flex-col gap-4 bg-[#01D6A3] shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#033B4A]">
                        <div className="w-full  mt-4 flex justify-center">
                            <Image src={cardImage3} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold text-white">Desenvolvimento de Aplicativos</h2>
                            <p className="mb-4 text-center  text-white text-md">Apps nativos e híbridos para Android e iOS, com design intuitivo e funcionalidades avançadas, alinhados às suas necessidades.</p>
                        </div>
                    </div>
                    <div className="desktop:w-1/4 mobile:w-11/12 mobile:mx-auto p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                        <div className="w-full mt-4 flex justify-center">
                            <Image src={cardImage4} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold">Consultoria Digital</h2>
                            <p className="mb-4 text-center  text-[#636B6E] text-md">Orientação estratégica para melhorar sua presença digital, desde o planejamento até a execução de soluções tecnológicas.</p>
                        </div>
                    </div>

                    <div className="desktop:w-1/4 mobile:w-11/12 mobile:mx-auto p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                        <div className="w-full mt-4 flex justify-center">
                            <Image src={cardImage2} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold">Manutenção e Suporte</h2>
                            <p className="mb-4 text-center text-[#636B6E] text-md">Manutenção contínua para garantir que seu site ou aplicativo esteja sempre atualizado e funcionando perfeitamente.</p>
                        </div>
                    </div>

                    <div className="desktop:w-1/4 mobile:w-full p-3 flex justify-center items-center">
                        <button className="w-4/5 p-6 bg-[#01D6A3] text-white z-50 font-[500] transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]">
                            <Link href="mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.">Realize um orçamento</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}