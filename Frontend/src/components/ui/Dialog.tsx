import type { ReactNode } from "react";

interface DialogProps {

    open: boolean;

    title: string;

    children: ReactNode;

    onClose: () => void;

}

function Dialog({

    open,

    title,

    children,

    onClose,

}: DialogProps) {

    if (!open) return null;

    return (

        <div
            className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/50
p-4
"
        >

            <div
                className="
relative
w-full
max-w-2xl
max-h-[90vh]
overflow-y-auto
rounded-2xl
bg-white
p-8
shadow-xl
"
            >

                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-5
                        top-5
                        text-2xl
                        text-gray-500
                        hover:text-gray-700
                    "
                >

                    ×

                </button>

                <h2 className="mb-6 text-2xl font-bold">

                    {title}

                </h2>

                {children}

            </div>

        </div>

    );

}

export default Dialog;