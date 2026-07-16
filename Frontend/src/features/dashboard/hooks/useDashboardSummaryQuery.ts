import { useQuery } from "@tanstack/react-query";

import { getDashboardSummary } from "../services/dashboardService";

export function useDashboardSummaryQuery() {
    return useQuery({
        queryKey: ["dashboard-summary"],

        queryFn: async () => {
            const response = await getDashboardSummary();
            return response.data;
        },
    });
}