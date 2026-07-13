import { Search } from "lucide-react";

interface SearchBarProps {

    value: string;

    onChange: (value: string) => void;

    placeholder?: string;

    className?: string;

}

function SearchBar({

    value,

    onChange,

    placeholder = "Search...",

    className = "w-72",

}: SearchBarProps) {

    return (

        <div className={`relative ${className}`}>

            <Search
                size={18}
                className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                "
            />

            <input

                value={value}

                onChange={(e) => onChange(e.target.value)}

                placeholder={placeholder}

                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    py-3
                    pl-10
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-200
                "

            />

        </div>

    );

}

export default SearchBar;