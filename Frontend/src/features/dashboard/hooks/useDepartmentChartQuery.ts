import { useQuery } from "@tanstack/react-query";

import { getEmployeesByDepartment } from "../services/dashboardService";

export function useDepartmentChartQuery() {

    return useQuery({

        queryKey: ["department-chart"],

        queryFn: async () => {

            const response =
                await getEmployeesByDepartment();

            return response.data;

        },

    });

}