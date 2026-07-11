interface SearchBarProps {

    value: string;

    onChange: (value: string) => void;

}

function SearchBar({

    value,

    onChange,

}: SearchBarProps) {

    return (

        <input

            value={value}

            onChange={(e) => onChange(e.target.value)}

            placeholder="Search employee..."

            className="
                w-72
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
            "

        />

    );

}

export default SearchBar;