import Image from "next/image";
import cardImage1 from './img/services-card-image-1.png';

export default function Services() {
    return (
        <section className="w-full h-screen">
            <div className="max-w-7xl h-full mx-auto py-28 flex flex-col">
                <div className="w-full flex">
                    <div className="w-3/6 p-4 flex flex-col items-start justify-center">
                        <h6 className="mb-1 text-[#01D6A3] text-xl font-black">Nossos serviços</h6>
                        <h2 className="mb-8 text-4xl text-[#033B4A] font-black">Soluções Digitais sob Medida para o Seu Sucesso</h2>
                        <p className="w-11/12 font-medium">Na G2L, oferecemos soluções digitais inovadoras e personalizadas para o seu negócio. Criamos sites e aplicativos que unem design moderno e funcionalidade, focados em resultados.</p>
                    </div>

                    <div className="w-3/6">
                        <div className="w-3/6 p-3 flex flex-col gap-4">
                            <div className="w-full flex justify-center">
                                <Image src={cardImage1} alt="imagem de uma tela em construção" width="97" height="100" />
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <h2 className="text-center">Desenvolvimento de Sites</h2>
                                <p className="text-center">Criação de websites sob medida, responsivos e otimizados para SEO, garantindo uma excelente performance e visibilidade nos motores de busca.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">

                </div>
            </div>
        </section>
    )
}