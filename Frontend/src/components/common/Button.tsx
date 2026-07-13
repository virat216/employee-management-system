interface ButtonProps {
    text: string;

    onClick?: () => void;

    type?: "button" | "submit";

    disabled?: boolean;

    variant?: "primary" | "secondary" | "danger";

    className?: string;
}

function Button({

    text,

    onClick,

    type = "button",

    disabled = false,

    variant = "primary",

    className = "",

}: ButtonProps) {

    const variantClasses = {

        primary: `
            bg-blue-600
            text-white
            hover:bg-blue-700
        `,

        secondary: `
            border
            border-gray-300
            bg-white
            text-gray-700
            hover:bg-gray-100
        `,

        danger: `
            bg-red-600
            text-white
            hover:bg-red-700
        `,

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`
                rounded-xl
                px-6
                py-3
                font-semibold
                transition

                ${
                    disabled
                        ? "cursor-not-allowed bg-gray-400 text-white"
                        : variantClasses[variant]
                }

                ${className}
            `}
        >

            {text}

        </button>

    );

}

export default Button;