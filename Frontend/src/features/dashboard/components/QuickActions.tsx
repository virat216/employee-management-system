import { useNavigate } from "react-router-dom";

import Card from "../../../components/common/Card";

import {
    UserPlus,
    Building2,
    Shield,
    Users,
} from "lucide-react";

function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Add Employee",
            icon: <UserPlus size={22} />,
            color: "bg-blue-600",
            path: "/employees",
        },

        {
            title: "Add Department",
            icon: <Building2 size={22} />,
            color: "bg-green-600",
            path: "/departments",
        },

        {
            title: "Add Role",
            icon: <Shield size={22} />,
            color: "bg-orange-500",
            path: "/roles",
        },

        {
            title: "Add User",
            icon: <Users size={22} />,
            color: "bg-purple-600",
            path: "/users",
        },

    ];

    return (

        <Card className="mt-8">

            <h2 className="mb-6 text-xl font-semibold">

                Quick Actions

            </h2>

            <div className="grid grid-cols-4 gap-5">

                {actions.map((action) => (

                    <button

                        key={action.title}

                        onClick={() => navigate(action.path)}

                        className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"

                    >

                        <div
                            className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white ${action.color}`}
                        >

                            {action.icon}

                        </div>

                        <p className="font-medium">

                            {action.title}

                        </p>

                    </button>

                ))}

            </div>

        </Card>

    );

}

export default QuickActions;