import Card from "../../../components/common/Card";
import TableSkeleton from "../../../components/common/TableSkeleton";

import DepartmentRow from "./DepartmentRow";

import type { Department } from "../types/department";

interface DepartmentTableProps {

    departments: Department[];

    loading: boolean;

    onEdit: (department: Department) => void;

    onDelete: (department: Department) => void;

}

function DepartmentTable({

    departments,

    loading,

    onEdit,

    onDelete,

}: DepartmentTableProps) {

    if (loading) {

        return <TableSkeleton columns={4} rows={8} />;

    }

    return (

        <Card>

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-4 py-3 text-left">
                            ID
                        </th>

                        <th className="px-4 py-3 text-left">
                            Department
                        </th>

                        <th className="px-4 py-3 text-left">
                            Location
                        </th>

                        <th className="px-4 py-3 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {departments.map((department) => (

                        <DepartmentRow
                            key={department.id}
                            department={department}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default DepartmentTable;