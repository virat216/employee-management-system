import type { ReactNode } from "react";

interface CardProps {

    children: ReactNode;

    className?: string;

}

function Card({

    children,

    className = "",

}: CardProps) {

    return (

        <div
            className={`
                bg-white
                rounded-2xl
                shadow-md
                p-6
                ${className}
            `}
        >

            {children}

        </div>

    );

}

export default Card;