import { useQuery } from "@tanstack/react-query";

import { getEmployeeLookup } from "../api/employeeLookupService";

export function useEmployeeLookupQuery() {

    return useQuery({

        queryKey: ["employee-lookup"],

        queryFn: async () => {

            const response =
                await getEmployeeLookup();

            return response.data;

        },

    });

}