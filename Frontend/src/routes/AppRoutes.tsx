import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import EmployeePage from "../features/employee/pages/EmployeePage";
import DepartmentPage from "../features/department/pages/DepartmentPage";
import RolePage from "../features/role/pages/RolePage";
import UserPage from "../features/user/pages/UserPage";
import ProfilePage from "../features/profile/pages/ProfilePage";

import ProtectedRoute from "../auth/ProtectedRoute";
import PublicRoute from "../auth/PublicRoute";
import { Navigate } from "react-router-dom";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                {/* Protected Routes */}

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
                    element={
                        <ProtectedRoute>
                            <EmployeePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/departments"
                    element={
                        <ProtectedRoute>
                            <DepartmentPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/roles"
                    element={
                        <ProtectedRoute>
                            <RolePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <UserPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />

                <Route
    path="*"
    element={<Navigate to="/dashboard" replace />}
/>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;