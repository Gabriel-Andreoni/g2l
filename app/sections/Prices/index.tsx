export function Prices() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="mb-12 text-center">
                <h1 className="text-lg font-black text-[#01D6A3]">Nossos Preços</h1>
                <h2 className="text-4xl font-black text-[#033b4a]">Investimento que Impulsiona o Seu Sucesso</h2>
            </div>
            <div className="flex gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div>
                    <h3 className="text-2xl font-black mb-4">Desenvolvimento de Aplicativos</h3>
                    <span className="flex flex-col text-xl">
                        <p className="text-sm text-[#636B6E] font-medium">a partir de</p>
                        <p className="text-6xl font-black text-[#01D6A3]">R$ 8.000,00</p>
                    </span>
                    </div>
                </div>
            </div>
        </section>
    );
};