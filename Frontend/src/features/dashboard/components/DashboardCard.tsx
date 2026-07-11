import type { ReactNode } from "react";
import Card from "../../../components/common/Card";

interface DashboardCardProps {

    title: string;

    value: number;

    icon: ReactNode;

    color: string;

}

function DashboardCard({

    title,

    value,

    icon,

    color,

}: DashboardCardProps) {

    return (

    <Card
        className="
            flex
            justify-between
            items-center
            hover:shadow-xl
            transition
        "
    >

        <div>

            <p className="text-gray-500">
                {title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
                {value}
            </h2>

        </div>

        <div
            className={`p-4 rounded-full text-white ${color}`}
        >
            {icon}
        </div>

    </Card>

);

}

export default DashboardCard;