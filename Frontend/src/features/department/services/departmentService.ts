import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { Department } from "../types/department";

export const getDepartments = async () => {

    const response =
        await api.get<ApiResponse<Department[]>>(
            "/departments"
        );

    return response.data;

};