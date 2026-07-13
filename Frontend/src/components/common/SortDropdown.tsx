import { useEffect, useMemo, useRef, useState } from "react";
import {
    ArrowUpDown,
    Check,
    ChevronDown,
} from "lucide-react";

export interface SortOption {
    label: string;
    value: string;
}

interface SortDropdownProps {
    options: SortOption[];
    sortBy: string;
    direction: "asc" | "desc";
    onChange: (
        sortBy: string,
        direction: "asc" | "desc"
    ) => void;
}

function SortDropdown({
    options,
    sortBy,
    direction,
    onChange,
}: SortDropdownProps) {

    const [open, setOpen] = useState(false);

    const containerRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(
            event: MouseEvent
        ) {

            if (
                containerRef.current &&
                !containerRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    const items = useMemo(() => {

        return options.flatMap((option) => {

            let ascending = "Ascending";
            let descending = "Descending";

            if (option.value === "firstName") {
                ascending = "A → Z";
                descending = "Z → A";
            }

            if (
                option.value === "department.name" ||
                option.value === "role.name"
            ) {
                ascending = "A → Z";
                descending = "Z → A";
            }

            if (option.value === "salary") {
                ascending = "Low → High";
                descending = "High → Low";
            }

            return [

                {
                    label: `${option.label} (${ascending})`,
                    column: option.value,
                    direction: "asc" as const,
                },

                {
                    label: `${option.label} (${descending})`,
                    column: option.value,
                    direction: "desc" as const,
                },

            ];

        });

    }, [options]);

    const selectedItem =
        items.find(
            item =>
                item.column === sortBy &&
                item.direction === direction
        );

    return (

        <div
            ref={containerRef}
            className="relative"
        >

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    shadow-sm
                    hover:border-blue-500
                    transition
                "
            >

                <ArrowUpDown size={18} />

                <span>

                    {selectedItem?.label ?? "Sort By"}

                </span>

                <ChevronDown
                    size={18}
                    className={
                        open
                            ? "rotate-180 transition"
                            : "transition"
                    }
                />

            </button>

            {open && (

                <div
                    className="
                        absolute
                        right-0
                        mt-2
                        w-64
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        shadow-xl
                        overflow-hidden
                        z-50
                    "
                >

                    <div
                        className="
                            border-b
                            px-4
                            py-3
                            font-semibold
                        "
                    >

                        Sort Employees

                    </div>

                    {items.map((item) => (

                        <button
                            key={`${item.column}-${item.direction}`}
                            onClick={() => {

                                onChange(
                                    item.column,
                                    item.direction
                                );

                                setOpen(false);

                            }}
                            className={`
                                flex
                                w-full
                                items-center
                                justify-between
                                px-4
                                py-3
                                text-left
                                transition
                                ${
                                    sortBy === item.column &&
                                    direction === item.direction
                                        ? "bg-blue-50 text-blue-600 font-medium"
                                        : "hover:bg-slate-100"
                                }
                            `}
                        >

                            {item.label}

                            {sortBy === item.column &&
                                direction === item.direction && (

                                    <Check size={18} />

                                )}

                        </button>

                    ))}

                </div>

            )}

        </div>

    );

}

export default SortDropdown;