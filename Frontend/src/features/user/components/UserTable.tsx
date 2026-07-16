import Card from "../../../components/common/Card";
import TableSkeleton from "../../../components/common/TableSkeleton";

import UserRow from "./UserRow";

import type { User } from "../types/user";

interface UserTableProps {

    users: User[];

    loading: boolean;

    onEdit: (user: User) => void;

    onDeactivate: (user: User) => void;

}

function UserTable({

    users,

    loading,

    onEdit,

    onDeactivate,

}: UserTableProps) {

    if (loading) {

        return <TableSkeleton columns={6} rows={8} />;

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
                            Username
                        </th>

                        <th className="px-4 py-3 text-left">
                            Employee
                        </th>

                        <th className="px-4 py-3 text-left">
                            Security Role
                        </th>

                        <th className="px-4 py-3 text-left">
                            Status
                        </th>

                        <th className="px-4 py-3 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <UserRow
                            key={user.id}
                            user={user}
                            onEdit={onEdit}
                            onDeactivate={onDeactivate}
                        />

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default UserTable;