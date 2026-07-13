import { Pencil, Trash2 } from "lucide-react";

import type { Department } from "../types/department";

interface DepartmentRowProps {

    department: Department;

    onEdit: (department: Department) => void;

    onDelete: (department: Department) => void;

}

function DepartmentRow({

    department,

    onEdit,

    onDelete,

}: DepartmentRowProps) {

    return (

        <tr className="border-t hover:bg-slate-50">

            <td className="px-4 py-3">

                {department.id}

            </td>

            <td className="px-4 py-3">

                {department.name}

            </td>

            <td className="px-4 py-3">

                {department.location}

            </td>

            <td className="px-4 py-3">

                <div className="flex justify-center gap-2">

                    <button
                        onClick={() => onEdit(department)}
                        className="rounded p-2 text-blue-600 hover:bg-blue-50"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
                        onClick={() => onDelete(department)}
                        className="rounded p-2 text-red-600 hover:bg-red-50"
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </td>

        </tr>

    );

}

export default DepartmentRow;