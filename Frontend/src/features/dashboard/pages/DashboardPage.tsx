import MainLayout from "../../../layouts/MainLayout";
import DashboardGrid from "../components/DashboardGrid";
import PageHeader from "../../../components/common/PageHeader";

function DashboardPage() {

    return (

        <MainLayout>

            <PageHeader

                title="Dashboard"

                subtitle="Welcome back to Employee Management System."

            />

            <DashboardGrid />

        </MainLayout>

    );

}

export default DashboardPage;