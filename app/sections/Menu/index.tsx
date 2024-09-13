export default function Menu() {
    return (
        <header className="w-full h-24 bg-white">
            <nav className="max-w-7xl h-full mx-auto flex items-center justify-center">
                <div className="w-48 h-full flex items-center justify-center">
                    logo
                </div>

                <div className="w-[500px] h-full ml-auto">
                    <ul className="w-full h-full flex items-center justify-center list-none">
                        <li className="mx-7 text-slate-950 font-black text-sm cursor-pointer transition-all hover:text-[#01D6A3]">Home</li>
                        <li className="mx-7 text-slate-950 font-black text-sm cursor-pointer transition-all hover:text-[#01D6A3]">Sobre</li>
                        <li className="mx-7 text-slate-950 font-black text-sm cursor-pointer transition-all hover:text-[#01D6A3]">Serviços</li>
                        <li className="mx-7 text-slate-950 font-black text-sm cursor-pointer transition-all hover:text-[#01D6A3]">Preço</li>
                        <li className="mx-7 text-slate-950 font-black text-sm cursor-pointer transition-all hover:text-[#01D6A3]">Contato</li>
                    </ul>
                </div>

                <button className="mx-8 p-4 bg-[#01D6A3] text-white font-black text-sm  transition-all hover:bg-[#033B4A] hover:text-[#01D6A3]">Entre em contato</button>
            </nav>
        </header>
    )
}