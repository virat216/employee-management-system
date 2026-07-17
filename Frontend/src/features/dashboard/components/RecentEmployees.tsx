import Card from "../../../components/common/Card";

import ErrorState from "../../../components/common/ErrorState";
import EmptyState from "../../../components/common/EmptyState";
import Skeleton from "../../../components/common/Skeleton";

import { useRecentEmployeesQuery } from "../hooks/useRecentEmployeesQuery";

function RecentEmployees() {

    const {
        data,
        isLoading,
        isError,
    } = useRecentEmployeesQuery();

    if (isLoading) {

        return (

            <Card className="mt-8">

                <Skeleton className="mb-6 h-7 w-56" />

                <div className="space-y-4">

                    {[1, 2, 3, 4, 5].map((item) => (

                        <div
                            key={item}
                            className="grid grid-cols-3 gap-6"
                        >

                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />

                        </div>

                    ))}

                </div>

            </Card>

        );

    }

    if (isError) {

        return (

            <Card className="mt-8">

                <ErrorState
                    title="Unable to load recent employees"
                    message="Please try again later."
                />

            </Card>

        );

    }

    if (!data || data.length === 0) {

        return (

            <Card className="mt-8">

                <EmptyState
                    title="No Recent Employees"
                    description="Newly added employees will appear here."
                />

            </Card>

        );

    }

    return (

        <Card className="mt-8">

            <h2 className="mb-4 text-xl font-semibold">

                Recent Employees

            </h2>

            <table className="w-full overflow-hidden rounded-lg">

                <thead>

                    <tr className="border-b">

                        <th className="py-3 text-left">

                            Name

                        </th>

                        <th className="py-3 text-left">

                            Department

                        </th>

                        <th className="py-3 text-left">

                            Hire Date

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {data.map((employee) => (

                        <tr
                            key={employee.id}
                            className="border-b hover:bg-slate-50"
                        >

                            <td className="py-3">

                                {employee.fullName}

                            </td>

                            <td className="py-3">

                                {employee.department}

                            </td>

                            <td className="py-3">

                                {new Date(employee.hireDate).toLocaleDateString("en-IN")}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default RecentEmployees;