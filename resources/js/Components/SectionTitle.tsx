import React from "react";
const SectionTitle = ({
    title,
    className,
}: {
    title: JSX.Element | JSX.Element[] | string;
    className?: string;
}) => (
    <h1 className={`dots text-2xl md:text-4xl font-medium mt-64 mb-16 text-center ${className}`}>
        {title}
    </h1>
);

export default SectionTitle;
