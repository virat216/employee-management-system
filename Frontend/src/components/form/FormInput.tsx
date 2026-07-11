import type {
    FieldError,
    UseFormRegisterReturn,
} from "react-hook-form";

interface FormInputProps {

    label: string;

    type: string;

    placeholder?: string;

    register: UseFormRegisterReturn;

    error?: FieldError;

}

function FormInput({

    label,

    type,

    placeholder = "",

    register,

    error,

}: FormInputProps) {

    return (

        <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-gray-700">

                {label}

            </label>

            <input

                type={type}

                placeholder={placeholder}

                {...register}

                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    text-gray-700
                    shadow-sm
                    outline-none
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200
                "

            />

            {error && (

                <p className="mt-1 text-sm text-red-500">

                    {error.message}

                </p>

            )}

        </div>

    );

}

export default FormInput;