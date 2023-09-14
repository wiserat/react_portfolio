import {Fancy} from "../assets";

export function TextPhoto(props) {
    return(
        <div className="">
            <img src={Fancy} alt="An image of mine..." className="rounded-[40px] lg:rounded-[100px] w-full h-[600px] object-cover" />
        </div>
    );
}