import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {

    title?: string;

    message?: string;

    onRetry?: () => void;

}

export default function ErrorState({

    title = "Something went wrong",

    message = "Please try again.",

    onRetry,

}: ErrorStateProps) {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-red-200
                bg-red-50
                p-10
                text-center
            "
        >

            <AlertTriangle
                size={52}
                className="text-red-500"
            />

            <h2 className="mt-4 text-xl font-semibold text-red-700">

                {title}

            </h2>

            <p className="mt-2 text-gray-600">

                {message}

            </p>

            {onRetry && (

                <button
                    onClick={onRetry}
                    className="
                        mt-6
                        rounded-lg
                        bg-red-600
                        px-5
                        py-2
                        text-white
                        hover:bg-red-700
                    "
                >

                    Retry

                </button>

            )}

        </div>

    );

}