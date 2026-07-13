import Button from "./Button";

interface PaginationProps {

    currentPage: number;

    totalPages: number;

    onPageChange: (page: number) => void;

}

function Pagination({

    currentPage,

    totalPages,

    onPageChange,

}: PaginationProps) {

    if (totalPages <= 1) {

        return null;

    }

    return (
    <div className="mt-6 flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <Button
            text="← Previous"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
        />

        <span className="text-sm font-medium text-gray-700">
            Page{" "}
            <span className="font-semibold">
                {currentPage + 1}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
                {totalPages}
            </span>
        </span>

        <Button
            text="Next →"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
        />
    </div>
);

}

export default Pagination;