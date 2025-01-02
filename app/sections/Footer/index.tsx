import Image from "next/image";
import Link from "next/link";

import Logo from "../Menu/img/gl2-logo.png";
import PhoneIcon from './img/phone-call.png';
import EmailIcon from './img/email.png';


export default function Footer() {
    return (
        <section className="w-full h-auto desktop:mt-10 py-20 mobile:p-4 flex mobile:flex-col justify-center items-start bg-[#033b4a]">
            <div className="desktop:w-[30%] mobile:w-full mobile:py-12">
                <Image src={Logo} alt="Logo em empresa G2L" width="150" height='150' />
            </div>
            <div className="desktop:w-[30%] mobile:w-[40%] flex flex-col gap-4">
                <h2 className="text-[#01D6A3] font-black text-xl">Links</h2>
                <ul className="w-full flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <Link className="text-[#fff] font-medium" href="#">Home</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <Link className="text-[#fff] font-medium" href="#">Sobre</Link>
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <Link className="text-[#fff] font-medium" href="#">Serviços</Link>
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <Link className="text-[#fff] font-medium" href="#">Preços</Link>
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <Link className="text-[#fff] font-medium" href="#">Contato</Link>
                    </li>


                </ul>
            </div>
            <div className="desktop:w-[30%] mobile:w-[40%] flex flex-col gap-4">
                <h2 className="text-[#01D6A3] font-black text-xl">Contato</h2>
                <ul className="w-full flex flex-col gap-2">
                    <li className="flex mobile:flex-wrap items-center gap-2">
                        <Image src={PhoneIcon} alt="ícone de um telefone" width="20" height="20" />
                        <span className="text-[#fff] font-medium">19 997010883</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Image src={EmailIcon} alt="ícone de email" width="20" height="20" />
                        <span className="text-[#fff] font-medium">
                            <Link href="mailto:g2l.clients@gmail.com?subject=Orçamento&body=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.">
                                g2l.clients@gmail.com
                            </Link>
                        </span>
                    </li>

                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.251256647203!2d-47.63321423972503!3d-22.72590654873897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631b0ffcd3e87%3A0x7e234a0f13c70ac0!2sTv.%20Gilberto%20Amado%2C%2042%20-%20Vila%20Monteiro%2C%20Piracicaba%20-%20SP%2C%2013418-415!5e0!3m2!1spt-PT!2sbr!4v1735843085605!5m2!1spt-PT!2sbr"
                            width="100%"
                            height="100%"
                            className="mt-4 border-none"
                            allowFullScreen
                        />
                </ul>
            </div>
        </section>
    )
}