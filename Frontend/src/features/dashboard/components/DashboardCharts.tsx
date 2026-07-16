import DepartmentChart from "./DepartmentChart";
import RoleChart from "./RoleChart";

function DashboardCharts() {

    return (

        <div className="mt-8 grid
grid-cols-1
xl:grid-cols-2
gap-6">

            <DepartmentChart />

            <RoleChart />

        </div>

    );

}

export default DashboardCharts;