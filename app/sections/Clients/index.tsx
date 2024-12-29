import Image from "next/image";

import ValverdeLogo from './img/valverde.png';
import Mv from './img/mv.png';
import Bluebell from './img/bluebell.png';
import RM from './img/rm.png';

export default function Clients() {
    return (
        <section className="py-28">
            <div className="max-w-2xl mx-auto flex desktop:flex-row mobile:flex-col justify-center items-center gap-24 relative">
                <Image className="opacity-60 desktop:w-[180px] mobile:w-[50%] mobile:h-[50%]" src={ValverdeLogo} alt="logo da empresa Valverde Engenharia" />
                <Image className="opacity-40 desktop:w-[190px] mobile:w-[60%] mobile:h-[60%]" src={Mv} alt="logo da empresa MV Quiosques" />
                <Image className="opacity-40 desktop:w-[90px] mobile:w-[40%] mobile:h-[40%]" src={Bluebell} alt="logo da empresa Bluebell Global"/>
                <Image className="opacity-40 desktop:w-[150px] mobile:w-[60%] mobile:h-[60%]" src={RM} alt="logo da empresa RM Ressonância Magnética"/>
            </div>
        </section>
    )
}