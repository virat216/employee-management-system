import { SearchX } from "lucide-react";

interface EmptyStateProps {
    title: string;
    description?: string;
}

function EmptyState({
    title,
    description = "Try adjusting your search or filters.",
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white py-16 text-center shadow-sm">
            <SearchX className="mb-4 h-12 w-12 text-gray-400" />

            <h3 className="text-lg font-semibold text-gray-800">
                {title}
            </h3>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
                {description}
            </p>
        </div>
    );
}

export default EmptyState;