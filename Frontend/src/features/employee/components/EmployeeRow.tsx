import {

    Pencil,

    Trash2,

} from "lucide-react";

import type { Employee } from "../types/employee";

interface EmployeeRowProps {

    employee: Employee;

    onEdit: (employee: Employee) => void;

    onDelete: (employee: Employee) => void;

}

function EmployeeRow({

    employee,

    onEdit,

    onDelete,

}: EmployeeRowProps) {

    return (

        <tr className="border-b hover:bg-slate-50">

            <td className="px-4 py-4">

                {employee.id}

            </td>

            <td className="px-4">

                {employee.firstName} {employee.lastName}

            </td>

            <td className="px-4">

                {employee.email}

            </td>

            <td className="px-4">

                {employee.department.name}

            </td>

            <td className="px-4">

                {employee.role.name}

            </td>

            <td className="px-4">

                ₹{Number(employee.salary).toLocaleString()}

            </td>

            <td>

                <div className="flex justify-center gap-4">

                    <button
                        type="button"
                        onClick={() => onEdit(employee)}
                        aria-label={`Edit ${employee.firstName} ${employee.lastName}`}
                    >

                        <Pencil
                            size={18}
                            className="text-blue-600 hover:text-blue-800"
                        />

                    </button>

                    <button
                        type="button"
                        onClick={() => onDelete(employee)}
                        aria-label={`Delete ${employee.firstName} ${employee.lastName}`}
                    >

                        <Trash2
                            size={18}
                            className="text-red-600 hover:text-red-800"
                        />

                    </button>

                </div>

            </td>

        </tr>

    );

}

export default EmployeeRow;