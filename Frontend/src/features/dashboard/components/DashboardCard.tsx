import type { ReactNode } from "react";
import Card from "../../../components/common/Card";

interface DashboardCardProps {

    title: string;

    value: number;

    active: number;

    inactive: number;

    icon: ReactNode;

    color: string;

}

function DashboardCard({

    title,

    value,

    active,

    inactive,

    icon,

    color,

}: DashboardCardProps) {

    return (

        <Card
            className="
                flex
                justify-between
                items-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
            "
        >

            <div>

                <p className="text-gray-500">

                    {title}

                </p>

                <h2 className="mt-2 text-4xl font-bold">

                    {value}

                </h2>

                <div className="mt-3 space-y-1 text-sm">

                    <p>

                        <span className="font-medium text-green-600">

                            Active:

                        </span>{" "}

                        {active}

                    </p>

                    <p>

                        <span className="font-medium text-red-600">

                            Inactive:

                        </span>{" "}

                        {inactive}

                    </p>

                </div>

            </div>

            <div
                className={`rounded-full p-4 text-white ${color}`}
            >

                {icon}

            </div>

        </Card>

    );

}

export default DashboardCard;