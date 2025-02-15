import Link from "next/link";

interface PriceProps {
    name: string,
    price: string,
    description: string,
    features: Array<string>,
    primary?: boolean,
    emailLink: string,
}

const services: PriceProps[] = [
    {
        name: 'Desenvolvimento de Aplicativos para Android e iOS',
        price: 'R$ 8.000,00',
        description: 'Aplicativo para Android ou iOS, com até 3 funcionalidades principais.',
        features: [
            'Aplicativos nativos ou híbridos para Android e iOS.',
            'Integração com APIs e funcionalidades avançadas.',
            'Suporte inicial após o lançamento.'
        ],
        emailLink: 'mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20aplicativo%20de%20celular.',
    },

    {
        name: 'Desenvolvimento de Sites Personalizados',
        price: 'R$ 2.000,00',
        description: 'Site com até 5 páginas, design personalizado e SEO inicial.',
        features: [
            'Design personalizado alinhado à identidade visual do cliente.',
            'Otimização para motores de busca (SEO).',
            'Integração com ferramentas como Google Analytics',
        ],
        primary: true,
        emailLink: 'mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20site%20personalizado.'
    },

    {
        name: 'Desenvolvimento de Sites em WordPress',
        price: 'R$ 1.300,00',
        description: 'Configuração do WordPress, design com tema personalizado e integração avançada.',
        features: [
            'Templates otimizados para SEO e compatíveis com dispositivos móveis.',
            'Ferramentas de fácil gerenciamento para atualizações do site.',
            'Opção de blogs, lojas virtuais ou portfólios.'
        ],
        emailLink: 'mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20site%20WordPress.'
    },
];


export default function Prices() {
    return (
        <section className="flex flex-col items-center justify-center h-auto p-4" id="prices">
            <div className="mb-12 text-center">
                <h1 className="text-2xl font-black text-[#01D6A3]">Nossos Preços</h1>
                <h2 className="text-4xl font-black text-[#033b4a]">Investimento que Impulsiona o Seu Sucesso</h2>
            </div>

            <ul className="w-full h-auto my-8 flex justify-center desktop:flex-wrap mobile:flex-nowrap gap-2 desktop:flex-row mobile:flex-col items-center">

                {services.map((service, index) => {
                    return (

                        <li key={index} className={`desktop:w-[30%] h-full flex flex-col p-6  ${service.primary ? '-mt-4 bg-[#01D6A3]' : ''} shadow-xl snap-end`}>

                            <div className="mb-4 text-center">
                                <h3 className="text-2xl text-pretty font-black text-[#033b4a]">{service.name}</h3>
                                <span className="flex flex-col text-xl">
                                    <p className={`w-[200px] text-center mt-6 text-sm ${service.primary ? 'text-white' : 'text-[#636B6E]'} font-medium`}>a partir de</p>
                                    <p className={`mt-2 text-4xl font-black text-[#01D6A3] ${service.primary ? 'text-white' : 'text-[#01D6A3]'}`}>{service.price}</p>
                                </span>
                            </div>

                            <hr className="my-8" />

                            <div className="w-full text-center">
                                <h5 className={`${service.primary ? 'text-white' : 'text-[#636B6E]'}`}>{service.description}</h5>

                                <ul className="w-full mx-auto mt-4 p-4 flex flex-col gap-4 text-left list-disc">
                                    {service.features.map((feature, index) => {
                                        return (
                                            <li key={index} className={`${service.primary ? 'text-white' : 'text-[#636B6E]'} font-medium text-pretty`}>{feature}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <button className={`w-60 mx-auto mt-6 p-4 font-medium transition-all ${service.primary ? 'bg-[#033b4a] text-white  hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#fff]' : 'bg-[#033b4a] text-white  hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]'}`}>
                                <Link href={service.emailLink}>Saiba mais</Link>
                            </button>

                        </li>

                    )
                })}
                <span className="w-full flex justify-end">
                    <Link className="mt-2 desktop:mr-16 mobile:mr-2 text-[#01D6A3] transition-all hover:text-[#033b4a]" href="mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.
">Para mais serviços →</Link>
                </span>
            </ul>
        </section>
    );
};