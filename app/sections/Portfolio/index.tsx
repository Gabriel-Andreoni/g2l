import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import MvCover from './img/mv-cover.png';
import ValverdeCover from './img/valverde-cover.png';
import BlueBellCover from './img/bluebell-cover.png';
import RMCover from './img/rm-cover.png';

interface ProjectsCover {
    cover: StaticImageData;
    url: string;
}

const projectsCovers: Array<ProjectsCover> = [
    {
        cover: MvCover,
        url: 'https://mvquiosques.com.br/'
    },

    {
        cover: ValverdeCover,
        url: 'https://www.valverdeengenharia.com.br/'
    },

    {
        cover: BlueBellCover,
        url: 'https://bluebell.global/'
    },

    {
        cover: RMCover,
        url: 'https://bluebell.global/'
    }
]

export default function Portfolio() {
    return (
        <section className="w-full h-auto flex flex-col relative">
            <h2 className="w-full pb-10 text-center text-3xl font-black uppercase text-[#033B4A]">Nossos últimos projetos</h2>
            <div className="w-full max-w-7xl desktop:h-full mobile:h-screen mx-auto pb-28 flex desktop:flex-row mobile:flex-col flex-wrap desktop:gap- mobile:gap-4 tablet:gap-4 justify-start after:content-[''] after:w-full desktop:after:h-96 mobile:after:h-[400px] after:block after:absolute after:left-0 desktop:after:top-[15rem] mobile:after:top-[40%] after:bg-[#01d6a3] after:z-[-1]">
                <ul className="w-full flex flex-wrap gap-4">
                    {projectsCovers.map((project, index) => {
                        return (
                            <li className="transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#033b4a]"key={index}>
                                <Link href={project.url} target="_blank" rel="no-follow">
                                    <Image className="w-[400px] h-[200px]" src={project.cover} alt="Projetos realizados pela G2L" />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}