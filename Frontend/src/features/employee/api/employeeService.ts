import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { PageResponse } from "../../../shared/types/pageResponse";
import type { Employee } from "../types/employee";
import type { EmployeeRequest } from "../types/employeeRequest";

export const getEmployees = async (

    page: number,

    size: number,

    sortBy: string,

    direction: "asc" | "desc",

    departmentId?: number,

    roleId?: number

) => {

    const response =
        await api.get<ApiResponse<PageResponse<Employee>>>(

            "/employees",

            {

                params: {

                    page,

                    size,

                    sortBy,

                    direction,

                    departmentId,

                    roleId,

                },

            }

        );

    return response.data;

};

export const createEmployee = async (
    employee: EmployeeRequest
) => {

    const response =
        await api.post<ApiResponse<Employee>>(
            "/employees",
            employee
        );

    return response.data;

};

export const updateEmployee = async (
    id: number,
    employee: EmployeeRequest
) => {

    const response = await api.put(
        `/employees/${id}`,
        employee
    );

    return response.data;

};

export const deleteEmployee = async (id: number) => {

    const response =
        await api.delete<ApiResponse<null>>(`/employees/${id}`);

    return response.data;

};