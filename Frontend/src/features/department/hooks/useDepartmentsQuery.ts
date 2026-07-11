import { useQuery } from "@tanstack/react-query";

import { getDepartments } from "../services/departmentService";

export function useDepartmentsQuery() {

    return useQuery({

        queryKey: ["departments"],

        queryFn: async () => {

            const response = await getDepartments();

            return response.data;

        },

    });

}