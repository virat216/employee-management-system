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
        return <ChartSkeleton />;
    }

    if (isError) {
        return (
            <Card>
                <ErrorState
                    title="Unable to load department chart"
                    message="Please try again later."
                />
            </Card>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Card>
                <EmptyState
                    title="No Department Data"
                    description="Add employees to view the department distribution."
                />
            </Card>
        );
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