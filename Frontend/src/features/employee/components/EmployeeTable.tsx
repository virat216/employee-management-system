import Card from "../../../components/common/Card";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import EmptyState from "../../../components/common/EmptyState";

import EmployeeRow from "./EmployeeRow";

import type { Employee } from "../types/employee";

interface EmployeeTableProps {

    employees: Employee[];

    loading: boolean;

    onEdit: (employee: Employee) => void;

}

function EmployeeTable({

    employees,

    loading,

    onEdit,

}: EmployeeTableProps) {

    if (loading) {

        return <LoadingSpinner />;

    }

    if (employees.length === 0) {

        return <EmptyState title="No employees found." />;

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

                        />

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default EmployeeTable;