import './styles.css';

import Menu from "../Menu";


export default function Hero() {
    return (
        <section>
            <Menu />

            <div className="hero-container w-full h-screen">
                <div className="max-w-[1200px] h-full m-auto flex flex-col justify-center z-50">
                    <h1 className="hero-title w-3/5 mb-10 text-[70px] font-[700] leading-[60px] text-white z-50">Transforme suas ideias em <span className="text-[#01D6A3]">realidades digitais</span></h1>
                    <h3 className=" w-[40%] mb-8 text-[18px] font-[500] text-white z-50">Sites e apps desenvolvidos com tecnologia de ponta, design inovador e foco na sua marca.</h3>
                    <button className="hero-button w-[20%] p-6 bg-[#01D6A3] text-white z-50 font-[500] transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]">Entre em contato</button>
                </div>
            </div>
        </section>
    )
}