import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";

import DashboardGrid from "../components/DashboardGrid";
import RecentEmployees from "../components/RecentEmployees";
import DashboardCharts from "../components/DashboardCharts";
import QuickActions from "../components/QuickActions";

function DashboardPage() {

    return (

        <MainLayout>

            <PageHeader

                title="Dashboard"

                subtitle="Welcome back to Employee Management System."

            />

            <DashboardGrid />

            <DashboardCharts/>

            <RecentEmployees />

            <QuickActions/>

        </MainLayout>

    );

}

export default DashboardPage;