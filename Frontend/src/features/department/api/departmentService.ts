import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { PageResponse } from "../../../shared/types/pageResponse";

import type { Department } from "../types/department";
import type { DepartmentRequest } from "../types/departmentRequest";

export const getDepartments = async (

    page: number,

    size: number,

    sortBy: string,

    direction: "asc" | "desc",

    search: string

) => {

    const response =
        await api.get<ApiResponse<PageResponse<Department>>>(
            "/departments",
            {
                params: {
                    page,
                    size,
                    sortBy,
                    direction,
                    search,
                },
            }
        );

    return response.data;

};

export const createDepartment = async (
    department: DepartmentRequest
) => {

    const response =
        await api.post<ApiResponse<Department>>(
            "/departments",
            department
        );

    return response.data;

};

export const updateDepartment = async (

    id: number,

    department: DepartmentRequest

) => {

    const response =
        await api.put<ApiResponse<Department>>(
            `/departments/${id}`,
            department
        );

    return response.data;

};

export const deleteDepartment = async (
    id: number
) => {

    const response =
        await api.delete<ApiResponse<null>>(
            `/departments/${id}`
        );

    return response.data;

};