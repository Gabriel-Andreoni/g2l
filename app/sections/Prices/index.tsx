export function Prices() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="mb-12 text-center">
                <h1 className="text-2xl font-black text-[#01D6A3]">Nossos Preços</h1>
                <h2 className="text-4xl font-black text-[#033b4a]">Investimento que Impulsiona o Seu Sucesso</h2>
            </div>

            <div className="w-full my-8 flex gap-1 justify-center items-center ">
                <div className="w-[30%] flex flex-col p-6 shadow-2xl">
                    <div className="mb-4 text-center">
                        <h3 className="text-2xl font-black text-[#033b4a]">Desenvolvimento de Aplicativos</h3>
                        <span className="flex flex-col text-xl">
                            <p className="w-[200px] text-center mt-6 text-sm text-[#636B6E] font-medium">a partir de</p>
                            <p className="mt-2 text-4xl font-black text-[#01D6A3]">R$ 8.000,00</p>
                        </span>
                    </div>
                    
                    <hr className="my-8" />

                    <div className="w-full text-center">
                        <h5 className="text-[#636B6E]">Aplicativo para Android ou iOS, com até 3 funcionalidades principais.</h5>

                        <ul className="w-full mx-auto mt-4 p-4 flex flex-col gap-4 text-left list-disc">
                            <li className="text-[#636B6E] font-medium text-pretty">Aplicativos nativos ou híbridos para Android e iOS.</li>
                            <li className="text-[#636B6E] font-medium text-pretty">Integração com APIs e funcionalidades avançadas, como pagamentos, geolocalização e notificações.</li>
                            <li className="text-[#636B6E] font-medium text-pretty">Suporte inicial após o lançamento.</li>
                        </ul>
                    </div>

                    <button className="w-60 mx-auto mt-6 p-4 bg-[#01D6A3] text-white font-medium transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]">Saiba Mais</button>
                </div>

                <div className="w-[30%] -mt-10 flex flex-col p-6 shadow-2xl bg-[#01D6A3]">
                    <div className="mb-4 text-center">
                        <h3 className="text-2xl font-black text-[#033b4a]">Desenvolvimento de Sites</h3>
                        <span className="flex flex-col text-xl">
                            <p className="w-[200px] text-center mt-6 text-sm text-white font-medium">a partir de</p>
                            <p className="mt-2 text-4xl font-black text-white">R$ 2.000,00</p>
                        </span>
                    </div>
                    
                    <hr className="my-8" />

                    <div className="text-center">
                        <h5 className="text-white">Site com até 5 páginas, design personalizado e SEO inicial.</h5>

                        <ul className="w-full mx-auto mt-4 p-4 flex flex-col gap-4 text-left list-disc">
                            <li className="text-white font-medium">Design personalizado alinhado à identidade visual do cliente.</li>
                            <li className="text-white font-medium">Otimização para motores de busca (SEO).</li>
                            <li className="text-white font-medium">Integração com ferramentas como Google Analytics, redes sociais e formulários de contato.</li>
                        </ul>
                    </div>

                    <button className="w-60 mx-auto mt-6 p-4 text-white bg-[#033b4a] font-medium transition-all hover:text-[#01D6A3]">Saiba Mais</button>
                </div>
                <div className="w-[30%] flex flex-col p-6 shadow-2xl">
                    <div className="mb-4 text-center">
                        <h3 className="text-2xl font-black text-[#033b4a]">Desenvolvimento de Sites em WordPress</h3>
                        <span className="flex flex-col text-xl">
                            <p className="w-[200px] text-center mt-6 text-sm text-[#636B6E] font-medium">a partir de</p>
                            <p className="mt-2 text-4xl font-black text-[#01D6A3]">R$ 1.300,00</p>
                        </span>
                    </div>
                    
                    <hr className="my-8" />

                    <div className="text-center">
                        <h5 className="text-[#636B6E]">Configuração do WordPress, design com tema personalizado e integração avançada.</h5>

                        <ul className="w-full mx-auto mt-4 p-4 flex flex-col gap-4 text-left list-disc">
                            <li className="text-[#636B6E] font-medium">Templates otimizados para SEO e compatíveis com dispositivos móveis.</li>
                            <li className="text-[#636B6E] font-medium">Ferramentas de fácil gerenciamento para atualizações do site.</li>
                            <li className="text-[#636B6E] font-medium">Opção de blogs, lojas virtuais ou portfólios.</li>
                        </ul>
                    </div>

                    <button className="w-60 mx-auto mt-6 p-4 bg-[#01D6A3] text-white font-medium transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]">Saiba Mais</button>
                </div>
            </div>
        </section>
    );
};