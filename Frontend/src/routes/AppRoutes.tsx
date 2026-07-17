import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import DepartmentPage from "../features/department/pages/DepartmentPage";
import RolePage from "../features/role/pages/RolePage";
import UserPage from "../features/user/pages/UserPage";

import ProtectedRoute from "../auth/ProtectedRoute";
import PublicRoute from "../auth/PublicRoute";

import EmployeePage from "../features/employee/pages/EmployeePage";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
    path="/"
    element={
        <PublicRoute>
            <LoginPage />
        </PublicRoute>
    }
/>

                <Route
                    path="/dashboard"
                    element={
    <ProtectedRoute>
        <DashboardPage />
    </ProtectedRoute>
}
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

<Route
    path="/users"
    element={<UserPage />}
/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;