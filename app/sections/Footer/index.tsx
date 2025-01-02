import Image from "next/image";
import Logo from "../Menu/img/gl2-logo.png"
import Link from "next/link";

export default function Footer() {
    return (
        <section className="w-full h-auto mt-10 py-20 flex justify-center items-start bg-[#033b4a]">
            <div className="w-[30%]">
                <Image src={Logo} alt="Logo em empresa G2L" width="100" height='100' />
            </div>
            <div className="w-[30%]">
                <h2 className="text-[#01D6A3] font-black text-xl">Links</h2>
                <ul className="w-full flex flex-col">
                    <li className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-[#fff] block"></span>
                        <Link href="#">Home</Link>
                    </li>

                    <li>
                    <span className="w-6 h-[2px] bg-[#fff] block"></span>
                        <Link href="#">Sobre</Link>
                    </li>

                    <li>
                        <Link href="#">Serviços</Link>
                    </li>
                    
                    <li>
                        <Link href="#">Preços</Link>
                    </li>
                    
                    <li>
                        <Link href="#">Contato</Link>
                    </li>
                        

                </ul>
            </div>
            <div className="w-[30%]">
                <h2 className="text-[#01D6A3] font-black text-xl">Contato</h2>

            </div>
        </section>
    )
}