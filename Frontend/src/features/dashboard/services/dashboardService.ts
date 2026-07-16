import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { DashboardSummary } from "../types/dashboard";
import type { RecentEmployee } from "../types/recentEmployee";
import type { ChartData } from "../types/chartData";

export const getEmployeesByDepartment = async () => {

    const response =
        await api.get<ApiResponse<ChartData[]>>(
            "/dashboard/employees-by-department"
        );

    return response.data;

};

export const getEmployeesByRole = async () => {

    const response =
        await api.get<ApiResponse<ChartData[]>>(
            "/dashboard/employees-by-role"
        );

    return response.data;

};

export const getDashboardSummary = async () => {

    const response =
        await api.get<ApiResponse<DashboardSummary>>(
            "/dashboard/summary"
        );

    return response.data;

};

export const getRecentEmployees = async () => {

    const response =
        await api.get<ApiResponse<RecentEmployee[]>>(
            "/dashboard/recent-employees"
        );

    return response.data;

};