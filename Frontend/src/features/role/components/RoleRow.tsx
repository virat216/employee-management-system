import { Pencil, Trash2 } from "lucide-react";

import type { Role } from "../types/role";

interface RoleRowProps {

    role: Role;

    onEdit: (role: Role) => void;

    onDeactivate: (role: Role) => void;

}

function RoleRow({

    role,

    onEdit,

    onDeactivate

}: RoleRowProps) {

    return (

        <tr className="border-t hover:bg-slate-50">

            <td className="px-4 py-3">

                {role.id}

            </td>

            <td className="px-4 py-3">

                {role.name}

            </td>

            <td className="px-4 py-3">

                {role.description}

            </td>

            <td className="px-4 py-3">

                <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
    role.active
        ? "bg-green-100 text-green-700"
        : "bg-gray-200 text-gray-700"
}`}
                >
                    {role.active ? "Active" : "Inactive"}
                </span>

            </td>

            <td className="px-4 py-3">

                <div className="flex justify-center gap-2">

                    <button
                        onClick={() => onEdit(role)}
                        className="rounded p-2 text-blue-600 hover:bg-blue-50"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
    disabled={!role.active}
    onClick={() => onDeactivate(role)}
    className="
        rounded
        p-2
        text-red-600
        hover:bg-red-50
        disabled:text-gray-400
        disabled:hover:bg-transparent
        disabled:cursor-not-allowed
    "
>
    <Trash2 size={18} />
</button>

                </div>

            </td>

        </tr>

    );

}

export default RoleRow;