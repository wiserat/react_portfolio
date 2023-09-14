import {SiDiscord, SiInstagram} from "react-icons/si";

export function Socials2() {
    return(
        <div className="px-14 lg:px-24 py-20 bg-secondary-color lg:bg-primary-color w-full h-80 lg:h-[600px] rounded-[40px] lg:rounded-[100px] flex items-center justify-center">
            <div className="grid grid-cols-2 items-center justify-center gap-10 lg:gap-40">
                <a href="https://discord.com/users/680055593188327466" target="_blank" className="lg:text-zinc-300 scale-100 hover:scale-110 text-white cursor-pointer hover:text-white text-8xl lg:text-9xl transition-all duration-500">
                    <SiDiscord />
                </a>
                <a href="https://www.instagram.com/tenora_jo/" target="_blank" className="lg:text-zinc-300 scale-100 hover:scale-110 text-white cursor-pointer hover:text-white text-8xl lg:text-9xl transition-all duration-500">
                    <SiInstagram />
                </a>
            </div>
        </div>
    );
}