import { useState } from "react";

function TextDetails() {
    return (
        <div className="textDetails flex flex-col mx-16">
            <h1 className="text-5xl mt-9 font-medium">
                Take a big step into the future of living
            </h1>
            <p className="mt-6 text-[1.2em]">
                Our approach goes beyond transactions through transparent
                dealing, ethical practices and a genuine commitment to client
                satisfaction. Keyspaceliving has emerged as a trusted partner in real
                estate ventures. With a legacy of excellence, we have
                consistently surpassed industry standards to redefine the art of
                property acqusition and sales.
            </p>
        </div>
    )
}

function ContactDetails() {
    
    return (
        <div className="mt-9 mx-16 lg:w-[142em] sm:w-[32em] bg-slate-900 p-7 rounded-md">
            <h1 className="text-5xl font-medium text-white mb-7">Reach Us</h1>
            <div className="details flex flex-col justify-around h-[70%]">
                <h2 className="text-2xl font-medium text-white">Email</h2>
                <h3 className="text-white">keyspaceliving@gmail.com</h3>
                <h2 className="text-2xl font-medium text-white">Phone Number</h2>
                <h3 className="text-white">+91 8075488945</h3>
            </div>
        </div>
    )
}


function countBars(_prop: any) {
    const { prop, num, text, bgcolor, color } = _prop;
    return (
        <div
            className={`w-auto h-[9em] ${bgcolor} ${prop} rounded-md flex justify-center flex-col`}
        >
            <h1 className={`${color} font-light text-[2.8em] ml-6`}>{num}+</h1>
            <label className={`${color} text-[1.2em] ml-6 mb-4`}>{text}</label>
        </div>
    );
}

function CountDetails() {
    return (
        <div className="countDetails mt-9 w-[32em] ml-32 grid grid-cols-2 grid-rows-2 gap-3">
            {countBars({
                prop: "col-span-1",
                num: 3500,
                text: "Happy customers",
                bgcolor: "bg-gray-200",
                color: "text-black",
            })}
            {countBars({
                prop: "col-span-1",
                num: 15,
                text: "Years Expericence",
                bgcolor: "bg-black",
                color: "text-white",
            })}
            {countBars({
                prop: "col-span-2",
                num: "10.000",
                text: "Property Ready",
                bgcolor: "bg-gray-200",
                color: "text-black",
            })}
        </div>
    );
}


export { TextDetails, CountDetails, ContactDetails };
