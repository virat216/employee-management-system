import type {
    FieldError,
    UseFormRegisterReturn,
} from "react-hook-form";

interface FormSelectProps {

    label: string;

    register: UseFormRegisterReturn;

    error?: FieldError;

    children: React.ReactNode;

}

function FormSelect({

    label,

    register,

    error,

    children,

}: FormSelectProps) {

    return (

        <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-gray-700">

                {label}

            </label>

            <select

                {...register}

                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    py-3
                    shadow-sm
                    outline-none
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200
                "

            >

                {children}

            </select>

            {error && (

                <p className="mt-1 text-sm text-red-500">

                    {error.message}

                </p>

            )}

        </div>

    );

}

export default FormSelect;