import Image from "next/image";
import Logo from "../Menu/img/gl2-logo.png"
import Link from "next/link";

export default function Footer() {
    return (
        <section className="w-full h-auto mt-10 py-20 flex justify-center items-start bg-[#033b4a]">
            <div className="w-[30%]">
                <Image src={Logo} alt="Logo em empresa G2L" width="150" height='150' />
            </div>
            <div className="w-[30%] flex flex-col gap-4">
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
            <div className="w-[30%] flex flex-col gap-4">
                <h2 className="text-[#01D6A3] font-black text-xl">Contato</h2>
                <ul className="w-full flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <span className="text-[#fff] font-medium">+55 19 997010883</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#01D6A3] block"></span>
                        <span className="text-[#fff] font-medium">g2l.clients@gmail.com</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}