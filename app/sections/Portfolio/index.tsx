import Image from 'next/image';
import Link from 'next/link';

import MvCover from './img/mv-cover.png';
import ValverdeCover from './img/valverde-cover.png';
import BlueBellCover from './img/bluebell-cover.png';
import RMCover from './img/rm-cover.png';

export default function Portfolio() {
    return (
        <section className="w-full h-auto flex flex-col relative">
            <h2 className="w-full pb-10 text-center text-3xl font-black uppercase text-[#033B4A]">Nossos últimos projetos</h2>
            <div className="w-full max-w-7xl desktop:h-full mobile:h-screen mx-auto pb-28 flex desktop:flex-row mobile:flex-col flex-wrap desktop:gap- mobile:gap-4 tablet:gap-4 justify-start after:content-[''] after:w-full desktop:after:h-52 mobile:after:h-[400px] after:block after:absolute after:left-0 desktop:after:top-[15rem] mobile:after:top-[40%] after:bg-[#01d6a3] after:z-[-1]    ">
                <div className="desktop:w-[30%] mobile:w-80 mobile:mx-auto desktop:mx-0 transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Link href="https://mvquiosques.com.br/" target="_blank" rel="no-follow">
                        <Image className="h-full" src={MvCover} alt="site de vendas de quiosques" width="1000" height="100" />
                    </Link>
                </div>
                <div className="desktop:w-[30%] mobile:w-80 mobile:mx-auto transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Link href="https://www.valverdeengenharia.com.br/" target="_blank" rel="no-follow">
                        <Image className="h-[209px]" src={ValverdeCover} alt="site de vendas de licença de comércio contra incêndio" width="1000" height="100" />
                    </Link>
                </div>
                <div className="desktop:w-[30%] mobile:w-80 mobile:mx-auto transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Link href="https://bluebell.global/" target="_blank" rel="no-follow">
                        <Image className="h-[209px]" src={BlueBellCover} alt="" width="1000" />
                    </Link>
                </div>

                <div className="desktop:w-[30%] mobile:w-80 mobile:mx-auto desktop:mx-0 transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Link href="https://bluebell.global/" target="_blank" rel="no-follow">
                        <Image className="h-[209px]" src={RMCover} alt="" width="1000" />
                    </Link>
                </div>
            </div>
        </section>
    )
}