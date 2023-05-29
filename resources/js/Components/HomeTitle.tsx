import React from "react";

const HomeTitle = ({
    children,
    className,
}: {
    children: JSX.Element | JSX.Element[];
    className?: string;
}) => (
    <h3
        className={`text-3xl md:text-4xl lg:text-4xl mb-4 font-medium uppercase text-blueblack-600 ${className}`}
    >
        {children}
    </h3>
);

export default HomeTitle;
