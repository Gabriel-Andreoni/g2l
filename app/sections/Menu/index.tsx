"use client";

import { useState } from "react";

import './styles.css'

import Image from "next/image";
import Link from "next/link";

import Logo from './img/gl2-logo.png';
import MenuImage from './img/menu.png';

export default function Menu() {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <header className="w-full h-24 mobile:fixed mobile:z-[10000] desktop:static tablet:static bg-white flex  items-center relative">
            <div className="w-full h-full flex items-center justify-center relative  mobile:justify-start">
                <div className="w-48 h-full flex items-center justify-center mobile:justify-start">
                    <Link href="https://www.g2l.tech/">
                        <Image className="cursor-pointer transition-all hover:-rotate-90" src={Logo} alt="logo da empresa" width="100" height="100" />
                    </Link>
                </div>

                <nav className={`menu-container mx-auto mobile:hidden tablet:block desktop:block ultra-wide:block ${isActive ? 'active' : ''}`}>
                    <div className="w-[500px] h-full ml-auto">
                        <ul className="w-full h-full flex items-center desktop:justify-center mobile:items-start list-none">
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">
                                <Link href="#hero">Home</Link>
                            </li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">
                                <Link href="#about">Sobre</Link>
                            </li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">
                                <Link href="#services">Serviços</Link>
                            </li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">
                                <Link href="#prices">Preços</Link>
                            </li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">
                                <Link href="#contact">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <button className="mx-8 p-4 bg-[#01D6A3] text-white font-medium text-sm  transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3] mobile:hidden laptop:block desktop:block ultra-wide:block
                
                ">
                    <Link href="mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.">Realize um orçamento</Link>
                </button>
            </div>
            <Image className="pointer desktop:hidden ultra-wide:hidden" src={MenuImage} alt="ícone de um hamburguer que sinaliza o menu do site" width="80" height='80' onClick={() => setIsActive((prevState) => !prevState)} />
        </header>
    )
}