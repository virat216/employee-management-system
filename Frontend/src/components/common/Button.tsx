interface ButtonProps {

    text: string;

    onClick?: () => void;

    type?: "button" | "submit";

}

function Button({

    text,

    onClick,

    type = "button",

}: ButtonProps) {

    return (

        <button

            type={type}

            onClick={onClick}

            className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
                px-6
                py-3
                transition
                font-semibold
            "

        >

            {text}

        </button>

    );

}

export default Button;