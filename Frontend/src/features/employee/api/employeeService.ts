import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { Employee } from "../types/employee";
import type { EmployeeRequest } from "../types/employeeRequest";

export const getEmployees = async () => {

    const response =
        await api.get<ApiResponse<Employee[]>>("/employees");

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