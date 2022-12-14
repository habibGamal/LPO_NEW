import React from 'react'
import { motion } from 'framer-motion'
interface MessagePageProps {
    imgSrc: string;
    children: React.ReactNode;
    girdRowsRatios?:[number,number]
}
export default function MessagePage({ girdRowsRatios,imgSrc, children }: MessagePageProps) {
    const [first,second] = girdRowsRatios || [56,20]
    return (
        <div className="bg-ov-white">
            <div className="container">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 1.3, delay: 0, type: 'spring' }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`grid grid-rows-[${first}%${second}%] grid-cols-1 2xl:grid-cols-2 2xl:grid-rows-1 justify-items-center items-center min-h-[calc(100vh-57px)]`}>
                    <div className='flex flex-col items-center'>
                        {
                            children
                        }
                    </div>
                    <img className='w-full max-w-[500px] 2xl:max-w-full' src={imgSrc} />
                </motion.div>
            </div>
        </div>
    )
}
