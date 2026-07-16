import { useQuery } from "@tanstack/react-query";

import { getEmployeesByRole } from "../services/dashboardService";

export function useRoleChartQuery() {

    return useQuery({

        queryKey: ["role-chart"],

        queryFn: async () => {

            const response =
                await getEmployeesByRole();

            return response.data;

        },

    });

}