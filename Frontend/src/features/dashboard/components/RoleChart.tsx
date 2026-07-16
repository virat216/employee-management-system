import Card from "../../../components/common/Card";

import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Tooltip,

    Cell,

} from "recharts";

import { useRoleChartQuery } from "../hooks/useRoleChartQuery";

const COLORS = [

    "#2563eb",

    "#16a34a",

    "#ea580c",

    "#9333ea",

    "#0891b2",

    "#e11d48",

];

function RoleChart() {

    const {

        data,

        isLoading,

        isError,

    } = useRoleChartQuery();

    if (isLoading) {

        return <Card>Loading...</Card>;

    }

    if (isError || !data) {

        return <Card>Failed to load chart.</Card>;

    }

    return (

        <Card>

            <h2 className="mb-4 text-xl font-semibold">

                Employees by Role

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="count"

                        nameKey="label"

                        outerRadius={100}

                    >

                        {data.map((_, index) => (

                            <Cell

                                key={index}

                                fill={
                                    COLORS[
                                        index % COLORS.length
                                    ]
                                }

                            />

                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </Card>

    );

}

export default RoleChart;