import './styles.css';

import Menu from "../Menu";
import Link from 'next/link';


export default function Hero() {
    return (
        <section>
            <Menu />

            <div className="hero-container w-full h-screen">
                <div className="max-w-[1200px] h-full m-auto flex flex-col justify-center z-50">
                    <h1 className="hero-title desktop:w-3/5 mb-10 desktop:px-0 desktop:text-[70px] font-[700] desktop:leading-[60px] text-white z-50 mobile:w-full mobile:text-[45px] mobile:leading-[40px] mobile:px-4 mobile:text-balance">Transforme suas ideias em <span className="text-[#01D6A3]">realidades digitais</span></h1>
                    <h3 className="desktop:w-[40%] mb-8 desktop:p-0 desktop:text-[18px] font-[500] text-white z-50 mobile:w-full mobile:text-[18px] mobile:px-4">Sites e apps desenvolvidos com tecnologia de ponta, design inovador e foco na sua marca.</h3>
                    <button className="hero-button desktop:w-[20%] desktop:mx-0 p-6 bg-[#01D6A3] text-white z-50 font-[500] transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3]  mobile:w-[358px] mobile:mx-4">
                        <Link href="mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.">Realize um orçamento</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}