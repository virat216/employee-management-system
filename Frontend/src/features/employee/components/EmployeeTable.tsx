import Card from "../../../components/common/Card";
import TableSkeleton from "../../../components/common/TableSkeleton";

import EmployeeRow from "./EmployeeRow";

import type { Employee } from "../types/employee";

interface EmployeeTableProps {

    employees: Employee[];

    loading: boolean;

    onEdit: (employee: Employee) => void;

    onDelete: (employee: Employee) => void;

}

function EmployeeTable({

    employees,

    loading,

    onEdit,

    onDelete,


}: EmployeeTableProps) {

    if (loading) {
    return <TableSkeleton columns={7} rows={8} />;
}

    return (

        <Card>

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-4 py-3 text-left">ID</th>

                        <th className="px-4 py-3 text-left">Name</th>

                        <th className="px-4 py-3 text-left">Email</th>

                        <th className="px-4 py-3 text-left">Department</th>

                        <th className="px-4 py-3 text-left">Role</th>

                        <th className="px-4 py-3 text-left">Salary</th>

                        <th className="px-4 py-3 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <EmployeeRow

                            key={employee.id}

                            employee={employee}

                            onEdit={onEdit}

                            onDelete={onDelete}

                        />

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default EmployeeTable;