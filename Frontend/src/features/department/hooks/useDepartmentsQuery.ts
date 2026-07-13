import { useQuery } from "@tanstack/react-query";

import { getDepartments } from "../api/departmentService";

interface UseDepartmentsQueryProps {

    page: number;

    size: number;

    sortBy: string;

    direction: "asc" | "desc";

    search: string;

}

export function useDepartmentsQuery({

    page,

    size,

    sortBy,

    direction,

    search,

}: UseDepartmentsQueryProps) {

    return useQuery({

        queryKey: [
            "departments",
            page,
            size,
            sortBy,
            direction,
            search,
        ],

        queryFn: async () => {

            const response = await getDepartments(
                page,
                size,
                sortBy,
                direction,
                search
            );

            return response.data;

        },

        placeholderData: (previousData) => previousData,

    });

}