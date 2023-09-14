import {Name} from "../components/Name";
import {Photo} from "../components/Photo";
import {Career} from "../components/Career";
import Bounce from 'react-reveal/Bounce';
import {Trader} from "../components/Trader";



export function HeroSection() {
    return(
        <div className="grid lg:grid-cols-2 gap-4 min-h-screen">
            <div className="flex flex-col gap-4">
                <div className="flex-2">
                    <Bounce up>
                        <Name />
                    </Bounce>
                </div>
                <Bounce up delay={250}>
                    <div className="flex-1">
                        <Career />
                    </div>
                </Bounce>
            </div>
            <div className="flex flex-col gap-4">
                <div className="">
                    <Bounce up delay={300}>
                        <Photo />
                    </Bounce>
                </div>
                <Bounce up>
                    <Trader />
                </Bounce>
            </div>
        </div>
    );
}