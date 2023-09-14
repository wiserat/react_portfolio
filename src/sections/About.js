import {TextPhoto} from "../components/TextPhoto";
import {Text} from "../components/Text";
import {Text2} from "../components/Text2"
import {Socials} from "../components/Socials";
import {Contact} from "../components/Contact";
import {Fancy} from "../assets";
import Bounce from 'react-reveal/Bounce';
import {Socials2} from "../components/Socials2";
import {Lure} from "../components/Lure";

export function About() {

    return (
        <div className="flex flex-col gap-4">
            {/*
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                    <Bounce up delay={200}>
                        <TextPhoto image={Fancy} />
                    </Bounce>
                </div>
                <Bounce up delay={100}>
                    <div className="lg:col-span-3">
                        <Text title={title} text={text} serif />
                    </div>
                </Bounce>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                    <Bounce up delay={200}>
                        <TextPhoto image={Fancy} />
                    </Bounce>
                </div>
                <Bounce up delay={100}>
                    <div className="lg:col-span-3 lg:row-start-1">
                        <Text title={title} text={text} />
                    </div>
                </Bounce>
            </div>
            */}
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 ">
                <div className="col-span-2 mb-4 lg:mb-0">
                    <Bounce up delay={50}>
                        <Socials />
                    </Bounce>
                </div>
                <div className="col-span-3">
                    <Bounce up>
                        <Text />
                    </Bounce>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
                <div className="col-span-3">
                    <Bounce up>
                        <Text2 />
                    </Bounce>
                </div>
                <div className="col-span-2 mt-4 lg:mt-0">
                    <Bounce up delay={50}>
                        <Socials2 />
                    </Bounce>
                </div>
            </div>
        </div>
    );
}

/*
picture, tech industry | jetbrains font
lecturing, picture | times new roman
socials, contact me
*/