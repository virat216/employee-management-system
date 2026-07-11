import { useQuery } from "@tanstack/react-query";

import { getEmployees } from "../api/employeeService";

export function useEmployeesQuery() {

    return useQuery({

        queryKey: ["employees"],

        queryFn: async () => {

            const response = await getEmployees();

            return response.data;

        },

    });

}