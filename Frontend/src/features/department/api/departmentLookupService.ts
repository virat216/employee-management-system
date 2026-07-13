import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { Department } from "../types/department";

export const getDepartmentLookup = async () => {

    const response =
        await api.get<ApiResponse<Department[]>>(
            "/departments/lookup"
        );

    return response.data;

};