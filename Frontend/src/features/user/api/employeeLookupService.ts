import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { EmployeeSummary } from "../../employee/types/employeeSummary";

export const getEmployeeLookup = async () => {

    const response =
        await api.get<ApiResponse<EmployeeSummary[]>>(
            "/users/employee-lookup"
        );

    return response.data;

};