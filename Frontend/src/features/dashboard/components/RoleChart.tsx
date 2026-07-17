import Card from "../../../components/common/Card";

import ChartSkeleton from "./ChartSkeleton";
import ErrorState from "../../../components/common/ErrorState";
import EmptyState from "../../../components/common/EmptyState";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LabelList,
} from "recharts";

import { useRoleChartQuery } from "../hooks/useRoleChartQuery";

function RoleChart() {

    const {
        data,
        isLoading,
        isError,
    } = useRoleChartQuery();

    if (isLoading) {
        return <ChartSkeleton />;
    }

    if (isError) {
        return (
            <Card>
                <ErrorState
                    title="Unable to load role chart"
                    message="Please try again later."
                />
            </Card>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Card>
                <EmptyState
                    title="No Role Data"
                    description="Add employees to view the role distribution."
                />
            </Card>
        );
    }

    // Sort descending and keep only the Top 10 roles
    const chartData = [...data]
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    return (
        <Card>

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                    Employees by Role
                </h2>

                <span className="text-sm text-gray-500">
                    Top 10 Roles
                </span>

            </div>

            <ResponsiveContainer
                width="100%"
                height={380}
            >
                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 40,
                        left: 20,
                        bottom: 90,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="label"
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={70}
                        tick={{
                            fontSize: 11,
                        }}
                    />

                    <YAxis
                        allowDecimals={false}
                    />

                    <Tooltip
                        formatter={(value) => [
                            `${value} Employees`,
                            "Count",
                        ]}
                    />

                    <Bar
                        dataKey="count"
                        fill="#2563eb"
                        radius={[6, 6, 0, 0]}
                    >
                        <LabelList
                            dataKey="count"
                            position="top"
                            fontSize={11}
                        />
                    </Bar>

                </BarChart>
            </ResponsiveContainer>

            <p className="mt-3 text-center text-sm text-gray-500">
                Showing the top 10 roles by employee count.
            </p>

        </Card>
    );
}

export default RoleChart;