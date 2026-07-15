import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import DepartmentPage from "../features/department/pages/DepartmentPage";
import RolePage from "../features/role/pages/RolePage";

import EmployeePage from "../features/employee/pages/EmployeePage";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="/employees"
                    element={<EmployeePage />}
                />

                <Route
                    path="/departments"
                    element={<DepartmentPage />}
                />

                <Route
    path="/roles"
    element={<RolePage />}
/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;