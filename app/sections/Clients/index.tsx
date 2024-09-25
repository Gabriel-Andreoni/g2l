import Image from "next/image";

import ValverdeLogo from './img/valverde.png';
import Mv from './img/mv.png';
import VeTech from './img/vetech.png';

export default function Clients() {
    return (
        <section className="py-28">
            <div className="max-w-2xl mx-auto flex desktop:flex-row mobile:flex-col justify-center items-center gap-24 relative">
                <Image className="opacity-60 mobile:w-[50%] mobile:h-[50%]" src={ValverdeLogo} alt="logo da empresa Valverde Engenharia" />
                <Image className="opacity-40 mobile:w-[60%] mobile:h-[60%]" src={Mv} alt="logo da empresa MV Quiosques" />
                <Image className="opacity-40 mobile:w-[60%] mobile:h-[60%]" src={VeTech} alt="logo da empresa MV Quiosques"/>
            </div>
        </section>
    )
}