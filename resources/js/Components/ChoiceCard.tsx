import React from "react";
import { motion } from "framer-motion";
import { animateUp } from "../Animation/Up";
import { up } from "../Animation/movements";
import { Discover } from "iconsax-react";
export default function Choice({
    imgSrc,
    title,
    onClick,
    desc,
    btnText,
}: {
    imgSrc: string;
    title: string;
    desc?: string;
    btnText?: string;
    onClick?: () => void;
}) {
    return (
        <motion.div
            {...up()}
            className="flex flex-col items-center max-w-[500px]"
        >
            <div className="bg-white border-[3px] h-full border-blueblack-500 pb-8 w-[90%] rounded-3xl">
                <img
                    src={imgSrc}
                    className="max-w-[210px] -mt-28 w-full aspect-square object-contain mx-auto"
                    alt=""
                />
                <div className="text-center p-4 sm:p-8 sm:px-16">
                    <h4 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">{title}</h4>
                    <p className="sm:text-lg text-blueblack-400">{desc}</p>
                </div>
            </div>
            <button
                onClick={onClick}
                className="bg-pink-500 -mt-8 rotate-icon hover:bg-blueblack-500 w-full justify-center flex gap-6 text-xl items-center text-white  rounded-3xl p-6 sm:p-8"
            >
                <Discover />
                <span>{btnText}</span>
            </button>
        </motion.div>
    );
}
