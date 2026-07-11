import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import { getDashboardSummary } from "../services/dashboardService";

import type { DashboardSummary } from "../types/dashboard";

import {
    Users,
    Building2,
    Shield,
    UserCog,
} from "lucide-react";

function DashboardGrid() {

    const [summary, setSummary] = useState<DashboardSummary | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadDashboard() {

            try {

                const response = await getDashboardSummary();

                setSummary(response.data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, []);

    if (loading) {

        return <h2>Loading Dashboard...</h2>;

    }

    if (!summary) {

        return <h2>Failed to load dashboard.</h2>;

    }

    return (

        <div className="grid grid-cols-4 gap-6">

            <DashboardCard
    title="Employees"
    value={summary.employees}
    icon={<Users size={28} />}
    color="bg-blue-600"
/>

        <DashboardCard
    title="Departments"
    value={summary.departments}
    icon={<Building2 size={28} />}
    color="bg-green-600"
/>    

        <DashboardCard
    title="Roles"
    value={summary.roles}
    icon={<Shield size={28} />}
    color="bg-orange-500"
/>    

     <DashboardCard
    title="Users"
    value={summary.users}
    icon={<UserCog size={28} />}
    color="bg-purple-600"
/>       

        </div>

    );

}

export default DashboardGrid;