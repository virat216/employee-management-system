interface TableSkeletonProps {
    rows?: number;
    columns?: number;
}

function TableSkeleton({
    rows = 8,
    columns = 6,
}: TableSkeletonProps) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full">
                <tbody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b last:border-b-0"
                        >
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableSkeleton;