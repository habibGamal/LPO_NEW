import React from "react"
import {motion} from 'framer-motion';
import { animateUp } from "../Animation/Up";
export default function Choice({ imgSrc, title, onClick }: { imgSrc: string, title: string, onClick?: () => void }) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            {...animateUp}
            className="rounded bg-slate-200 cursor-pointer w-fit mx-auto p-4">
            <img
                src={imgSrc}
                className="max-w-[350px] w-full aspect-square object-contain mx-auto" alt=""
            />
            <h4 className="text-2xl text-center m-6 mb-0">{title}</h4>
        </motion.div>
    )
}
