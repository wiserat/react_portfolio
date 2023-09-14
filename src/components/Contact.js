import emailjs from '@emailjs/browser';
import {useRef} from "react";


export function Contact() {

    const form = useRef();
    let valid = true;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c8ds697', 'template_yxc3san', form.current, 'NnjQ-F2Fl3JI-CuRF')
            .then((result) => {
                console.log(result.text);
                console.log(form.current)
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className="lg:px-40 px-6 py-20 bg-primary-color w-full h-full rounded-[40px] lg:rounded-[100px] flex flex-col gap-6 items-center justify-center">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 w-full lg:grid-cols-4 gap-10">
                <div className="flex flex-col w-full h-full lg:w-[700px] items-center lg:col-span-3">
                    <h1 className="font-semibold text-center text-white text-4xl lg:text-7xl pb-6">Contact Me!</h1>
                    <label className="pt-4 pb-1 text-3xl text-white font-semibold">Name:</label>
                    <input type="text" name="user_name" className="w-[300px] text-white bg-zinc-800 rounded-xl text-xl p-1" />
                    <label className="pt-4 pb-1 text-3xl text-white font-semibold">Email:</label>
                    <input type="email" name="user_email" className="w-[300px] text-white bg-zinc-800 rounded-xl text-xl p-1" />
                    <label className="pt-4 pb-1 text-3xl text-white font-semibold">Message:</label>
                    <textarea name="message" className="w-full h-[200px] text-white bg-zinc-800 rounded-xl p-1 text-xl" />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <input type="submit" value="Send" className="cursor-pointer w-full h-40 items-center justify-center bg-pr rounded-3xl lg:rounded-[40px] text-3xl lg:text-[75px] text-white font-semibold p-4" />
                </div>
            </form>
        </div>
    );
}