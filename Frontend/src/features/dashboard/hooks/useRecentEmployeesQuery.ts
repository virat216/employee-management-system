import { useQuery } from "@tanstack/react-query";

import { getRecentEmployees } from "../services/dashboardService";

export function useRecentEmployeesQuery() {

    return useQuery({

        queryKey: ["recent-employees"],

        queryFn: async () => {

            const response =
                await getRecentEmployees();

            return response.data;

        },

    });

}