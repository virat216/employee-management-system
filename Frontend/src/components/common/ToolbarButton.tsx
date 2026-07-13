import type { ReactNode } from "react";

interface ToolbarButtonProps {

    icon: ReactNode;

    text: string;

    onClick?: () => void;

}

function ToolbarButton({

    icon,

    text,

    onClick,

}: ToolbarButtonProps) {

    return (

        <button
            type="button"
            onClick={onClick}
            className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                shadow-sm
                hover:border-blue-500
                hover:shadow-md
                transition
            "
        >

            {icon}

            <span className="font-medium">

                {text}

            </span>

        </button>

    );

}

export default ToolbarButton;