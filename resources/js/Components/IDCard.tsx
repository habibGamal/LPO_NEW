import React from "react";
const IDCard = ({
    name,
    title,
    highlight = "",
    imgSrc,
}: {
    name: string;
    title: string;
    highlight?: string;
    imgSrc?: string;
}) => (
    <li className="text-xl shadow-gray-400 font-sans bg-gray-50 p-4 rounded w-fit">
        <div className="flex flex-col lg:flex-row">
            {imgSrc && (
                <img
                    className="w-36 object-top aspect-square object-cover mb-4 lg:mb-0 mx-auto lg:mx-4 rounded"
                    src={imgSrc}
                />
            )}
            <div>
                <h4 className="text-2xl font-bold font-sans mb-2">{name}</h4>
                {title}
                <br />
                <span className="font-bold font-sans">{highlight}</span>
            </div>
        </div>
    </li>
);

export default IDCard;
