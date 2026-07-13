import { useQuery } from "@tanstack/react-query";

import { getDepartmentLookup } from "../api/departmentLookupService";

export function useDepartmentLookupQuery() {

    return useQuery({

        queryKey: ["department-lookup"],

        queryFn: async () => {

            const response =
                await getDepartmentLookup();

            return response.data;

        },

    });

}