import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function NavLink({
    onClick,
    content,
    href,
    divider,
}: {
    onClick: React.MouseEventHandler<HTMLLIElement>;
    content: React.ReactNode;
    href: string;
    divider?: boolean;
}) {
    return (
        <li className={`${divider && "border-b pb-4"}`} onClick={onClick}>
            <Link
                className="text-lg 2xl:text-xl font-tajawal font-medium hover:text-second"
                href={href}
            >
                {content}
            </Link>
        </li>
    );
}
