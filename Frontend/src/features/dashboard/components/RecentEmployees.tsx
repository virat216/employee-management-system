import Card from "../../../components/common/Card";

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

                Loading recent employees...

            </Card>

        );

    }

    if (isError || !data) {

        return (

            <Card className="mt-8">

                Failed to load recent employees.

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

                                {employee.hireDate}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Card>

    );

}

export default RecentEmployees;