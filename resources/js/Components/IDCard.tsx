import React from "react";
const IDCard = ({
    title,
    content,
    highlight = "",
    imgSrc,
}: {
    title: string;
    content: string;
    highlight?: string;
    imgSrc?: string;
}) => (
    <li className="text-xl shadow-gray-400 font-sans bg-gray-50 p-4 rounded w-fit">
        <h4 className="point-before text-2xl font-medium mb-4">{title}</h4>
        <p className="text-lg list-disc space-y-2 text-blueblack-500 pb-8 sm:px-8">
            {content}
        </p>
    </li>
);

export default IDCard;
