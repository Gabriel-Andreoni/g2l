import Image from 'next/image';

import MvCover from './img/mv-cover.png';
import ValverdeCover from './img/valverde-cover.png';
import StrapiCover from './img/strapi-cover.png';

export default function Portfolio() {
    return (
        <section className="w-full h-auto flex flex-col relative">
            <h2 className="w-full pb-10 text-center text-3xl font-black uppercase text-[#033B4A]">Nossos últimos projetos</h2>
            <div className="w-full max-w-7xl desktop:h-full mobile:h-screen mx-auto pb-28 flex desktop:flex-row mobile:flex-col gap-4 after:content-[''] after:w-full desktop:after:h-52 mobile:after:h-[400px] after:block after:absolute after:left-0 desktop:after:top-[15rem] mobile:after:top-[40%] after:bg-[#01d6a3] after:z-[-1]    ">
                <div className="desktop:w-1/3 mobile:w-80 mobile:mx-auto transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Image className="h-full" src={MvCover} alt="site de vendas de quiosques" width="1000" height="100" />
                </div>
                <div className="desktop:w-1/3 mobile:w-80 mobile:mx-auto transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Image src={ValverdeCover} alt="site de vendas de licença de comércio contra incêndio" width="1000" height="100" />
                </div>
                <div className="desktop:w-1/3 mobile:w-80 mobile:mx-auto transition-all duration-500 cursor-pointer hover:shadow-[10px_10px_1px_#033B4A]">
                    <Image src={StrapiCover} alt="" width="1000" height="100" />
                </div>
            </div>
        </section>
    )
}