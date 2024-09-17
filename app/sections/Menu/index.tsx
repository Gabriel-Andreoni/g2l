"use client";

import { useState } from "react";

import './styles.css'

import Image from "next/image";

import MenuImage from './img/menu.png';

export default function Menu() {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <header className="w-full h-24 bg-white flex  items-center relative">
            <div className="w-full h-full flex items-center justify-center relative  mobile:justify-start">
                <div className="w-48 h-full flex items-center justify-center mobile:justify-start">
                    logo
                </div>

                <nav className={`menu-container mx-auto mobile:hidden ${isActive ? 'active' : ''}`}>
                    <div className="w-[500px] h-full ml-auto">
                        <ul className="w-full h-full flex items-center justify-center list-none">
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">Home</li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">Sobre</li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">Serviços</li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">Preços</li>
                            <li className="mx-7 text-slate-950 font-medium text-md cursor-pointer transition-all hover:text-[#01D6A3]">Contato</li>
                        </ul>
                    </div>
                </nav>

                <button className="mx-8 p-4 bg-[#01D6A3] text-white font-medium text-sm  transition-all hover:bg-[#033b4a] hover:text-[#01D6A3] hover:shadow-[10px_10px_1px_#01D6A3] mobile:hidden">Entre em contato</button>
            </div>
            <Image className="pointer" src={MenuImage} alt="ícone de um hamburguer que sinaliza o menu do site" width="80" height='80' onClick={() => setIsActive((prevState) => !prevState)} />
        </header>
    )
}