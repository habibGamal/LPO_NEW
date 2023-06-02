import React from "react";

export default function Header({
    title,
    desc,
    imgSlug,
}: {
    title: string;
    desc: string;
    imgSlug: string;
}) {
    return (
        <div className="relative my-16">
            <div className="absolute grid place-items-center inset-0">
                <div className="text-center md:mb-8 lg:mb-16">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 font-medium capitalize text-white">
                        {title}
                    </h3>
                    <h2 className=" md:text-lg lg:text-2xl mb-4 font-medium capitalize text-[#E0E9F5]">
                        {desc}
                    </h2>
                </div>
            </div>
            <img
                className="hidden md:block"
                src={`/images/${imgSlug}_bg.png`}
            />
            <img
                className="hidden sm:block md:hidden"
                src={`/images/${imgSlug}_bg_small.png`}
            />
            <img
                className="block sm:hidden"
                src={`/images/${imgSlug}_bg_xsmall.png`}
            />
        </div>
    );
}
