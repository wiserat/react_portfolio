import {Fancy} from "../assets/index"

export function Photo() {
    return(
        <div className="">
            <img src={Fancy} alt="An image of mine..." className="rounded-[40px] lg:rounded-[100px] w-full lg:h-auto h-80 object-cover object-top transition-all duration-500 filter lg:grayscale lg:hover:grayscale-0" />
        </div>
    );
}