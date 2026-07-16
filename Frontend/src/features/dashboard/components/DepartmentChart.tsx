import Card from "../../../components/common/Card";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import { useDepartmentChartQuery } from "../hooks/useDepartmentChartQuery";

function DepartmentChart() {

    const {

        data,

        isLoading,

        isError,

    } = useDepartmentChartQuery();

    if (isLoading) {

        return <Card>Loading...</Card>;

    }

    if (isError || !data) {

        return <Card>Failed to load chart.</Card>;

    }

    return (

        <Card>

            <h2 className="mb-4 text-xl font-semibold">

                Employees by Department

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <BarChart data={data}>

                    <XAxis dataKey="label" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="#2563eb"
                    />

                </BarChart>

            </ResponsiveContainer>

        </Card>

    );

}

export default DepartmentChart;