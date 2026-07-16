import { Pencil, Trash2 } from "lucide-react";

import type { User } from "../types/user";

interface UserRowProps {

    user: User;

    onEdit: (user: User) => void;

    onDeactivate: (user: User) => void;

}

function UserRow({

    user,

    onEdit,

    onDeactivate,

}: UserRowProps) {

    return (

        <tr className="border-t hover:bg-slate-50">

            <td className="px-4 py-3">

                {user.id}

            </td>

            <td className="px-4 py-3">

                {user.username}

            </td>

            <td className="px-4 py-3">

                {user.employee.firstName} {user.employee.lastName}

            </td>

            <td className="px-4 py-3">

                {user.securityRole}

            </td>

            <td className="px-4 py-3">

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.enabled
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {user.enabled ? "Enabled" : "Disabled"}
                </span>

            </td>

            <td className="px-4 py-3">

                <div className="flex justify-center gap-2">

                    <button

                        onClick={() => onEdit(user)}

                        className="
                            rounded
                            p-2
                            text-blue-600
                            hover:bg-blue-50
                        "

                    >

                        <Pencil size={18} />

                    </button>

                    <button

                        onClick={() => onDeactivate(user)}

                        disabled={!user.enabled}

                        className="
                            rounded
                            p-2
                            text-red-600
                            hover:bg-red-50
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "

                    >

                        <Trash2 size={18} />

                    </button>

                </div>

            </td>

        </tr>

    );

}

export default UserRow;