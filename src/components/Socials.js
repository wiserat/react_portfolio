import {SiDiscord, SiGithub, SiInstagram, SiLinkedin} from 'react-icons/si'


export function Socials() {
    return(
        <div className="px-14 lg:px-24 py-20 bg-primary-color lg:bg-secondary-color w-full h-80 lg:h-[600px] rounded-[40px] lg:rounded-[100px] flex items-center justify-center">
            <div className="grid grid-cols-2 items-center justify-center gap-10 lg:gap-40">
                <a href="https://www.linkedin.com/in/jon%C3%A1%C5%A1-tenora-12997b242/" target="_blank" className="lg:text-zinc-300 scale-100 hover:scale-110 text-white cursor-pointer hover:text-white text-8xl lg:text-9xl transition-all duration-500">
                    <SiLinkedin />
                </a>
                <a href="https://github.com/wiserat" target="_blank" className="lg:text-zinc-300 scale-100 hover:scale-110 text-white cursor-pointer hover:text-white text-8xl lg:text-9xl transition-all duration-500">
                    <SiGithub />
                </a>
            </div>
        </div>
    );
}