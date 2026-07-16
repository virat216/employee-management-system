import DashboardCard from "./DashboardCard";

import { useDashboardSummaryQuery } from "../hooks/useDashboardSummaryQuery";

import {

    Users,

    Building2,

    Shield,

    UserCog,

} from "lucide-react";

function DashboardGrid() {

    const {

        data: summary,

        isLoading,

        isError,

    } = useDashboardSummaryQuery();

    if (isLoading) {

        return <h2>Loading Dashboard...</h2>;

    }

    if (isError || !summary) {

        return <h2>Failed to load dashboard.</h2>;

    }

    return (

        <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

            <DashboardCard

                title="Employees"

                value={summary.employees}

                active={summary.activeEmployees}

                inactive={summary.inactiveEmployees}

                icon={<Users size={28} />}

                color="bg-blue-600"

            />

            <DashboardCard

                title="Departments"

                value={summary.departments}

                active={summary.activeDepartments}

                inactive={summary.inactiveDepartments}

                icon={<Building2 size={28} />}

                color="bg-green-600"

            />

            <DashboardCard

                title="Roles"

                value={summary.roles}

                active={summary.activeRoles}

                inactive={summary.inactiveRoles}

                icon={<Shield size={28} />}

                color="bg-orange-500"

            />

            <DashboardCard

                title="Users"

                value={summary.users}

                active={summary.enabledUsers}

                inactive={summary.disabledUsers}

                icon={<UserCog size={28} />}

                color="bg-purple-600"

            />

        </div>

    );

}

export default DashboardGrid;