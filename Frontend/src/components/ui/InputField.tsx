import type { InputHTMLAttributes } from "react";

interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {

    label: string;

}

function InputField({

    label,

    ...inputProps

}: InputFieldProps) {

    return (

        <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-gray-700">

                {label}

            </label>

            <input

                {...inputProps}

                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    text-gray-700
                    shadow-sm
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200
                    outline-none
                "

            />

        </div>

    );

}

export default InputField;