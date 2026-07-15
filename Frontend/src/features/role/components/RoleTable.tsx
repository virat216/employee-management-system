import Card from "../../../components/common/Card";
import TableSkeleton from "../../../components/common/TableSkeleton";

import RoleRow from "./RoleRow";

import type { Role } from "../types/role";

interface RoleTableProps {

    roles: Role[];

    loading: boolean;

    onEdit: (role: Role) => void;

    onDeactivate: (role: Role) => void;

}

function RoleTable({

    roles,

    loading,

    onEdit,

    onDeactivate,

}: RoleTableProps) {

    if (loading) {

        return <TableSkeleton columns={5} rows={8} />;

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
                            Role
                        </th>

                        <th className="px-4 py-3 text-left">
                            Description
                        </th>

                        <th className="px-4 py-3 text-center">
                            Status
                        </th>

                        <th className="px-4 py-3 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {roles.map((role) => (

                        <RoleRow
                            key={role.id}
                            role={role}
                            onEdit={onEdit}
                            onDeactivate={onDeactivate}
                        />

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default RoleTable;