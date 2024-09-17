import Image from "next/image";
import cardImage1 from './img/services-card-image-1.png';
import cardImage2 from './img/services-card-image-2.png';

export default function Services() {
    return (
        <section className="w-full h-screen">
            <div className="max-w-7xl h-full mx-auto py-28 flex flex-col gap-4">
                <div className="w-full flex">
                    <div className="w-3/6 p-4 flex flex-col items-start justify-center">
                        <h6 className="mb-1 text-[#01D6A3] text-xl font-black">Nossos serviços</h6>
                        <h2 className="mb-8 text-4xl text-[#033B4A] font-black">Soluções Digitais sob Medida para o Seu Sucesso</h2>
                        <p className="w-11/12 font-medium text-[#636B6E]">Na G2L, oferecemos soluções digitais inovadoras e personalizadas para o seu negócio. Criamos sites e aplicativos que unem design moderno e funcionalidade, focados em resultados.</p>
                    </div>

                    <div className="w-3/6 pl-2 flex gap-4">
                        <div className="w-3/6 p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                            <div className="w-full mt-4 flex justify-center">
                                <Image src={cardImage1} alt="imagem de uma tela em construção" width="97" height="100" />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-center font-bold">Desenvolvimento de Sites</h2>
                                <p className="mb-4 text-center font-medium text-[#636B6E]">Criação de websites sob medida, responsivos e otimizados para SEO, garantindo uma excelente performance e visibilidade nos motores de busca.</p>
                            </div>
                        </div>

                        <div className="w-3/6 p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                            <div className="w-full mt-4 flex justify-center">
                                <Image src={cardImage2} alt="imagem de uma tela em construção" width="97" height="100" />
                            </div>
                            <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                                <h2 className="text-center font-bold">Desenvolvimento de Aplicativos</h2>
                                <p className="mb-4 text-center font-medium text-[#636B6E]">Apps nativos e híbridos para Android e iOS, com design intuitivo e funcionalidades avançadas, focados nas necessidades do seu negócio.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-4">
                    <div className="w-1/4 p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                        <div className="w-full mt-4 flex justify-center">
                            <Image src={cardImage2} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold">Manutenção e Suporte</h2>
                            <p className="mb-4 text-center font-medium text-[#636B6E]">Oferecemos manutenção contínua para garantir que seu site ou aplicativo esteja sempre atualizado e funcionando perfeitamente.</p>
                        </div>
                    </div>
                    <div className="w-1/4 p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                        <div className="w-full mt-4 flex justify-center">
                            <Image src={cardImage2} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold">Manutenção e Suporte</h2>
                            <p className="mb-4 text-center font-medium text-[#636B6E]">Oferecemos manutenção contínua para garantir que seu site ou aplicativo esteja sempre atualizado e funcionando perfeitamente.</p>
                        </div>
                    </div>

                    <div className="w-1/4 p-3 flex flex-col gap-4 shadow-[0px_0px_20px_0px_#00000019] transition duration-500 hover:shadow-[10px_10px_1px_#01D6A3]">
                        <div className="w-full mt-4 flex justify-center">
                            <Image src={cardImage2} alt="imagem de uma tela em construção" width="97" height="100" />
                        </div>
                        <div className="w-full flex flex-col gap-2 shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.1)]">
                            <h2 className="text-center font-bold">Manutenção e Suporte</h2>
                            <p className="mb-4 text-center font-medium text-[#636B6E]">Oferecemos manutenção contínua para garantir que seu site ou aplicativo esteja sempre atualizado e funcionando perfeitamente.</p>
                        </div>
                    </div>

                    <div className="w-1/4 p-3 flex justify-center items-center">
                        <button className="w-4/5 p-6 bg-[#01D6A3] text-white z-50 font-[500] transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]">Entre em contato</button>
                    </div>
                </div>
            </div>
        </section>
    )
}