import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { DashboardSummary} from "../types/dashboard";
export const getDashboardSummary = async () => {

    const response =
    await api.get<ApiResponse<DashboardSummary>>(
        "/dashboard/summary"
    );

return response.data;

};