import { useQuery } from "@tanstack/react-query";

import { getRoles } from "../api/roleService";

interface UseRolesQueryProps {

    page: number;

    size: number;

    sortBy: string;

    direction: "asc" | "desc";

    search: string;

}

export function useRolesQuery({

    page,

    size,

    sortBy,

    direction,

    search,

}: UseRolesQueryProps) {

    return useQuery({

        queryKey: [
            "roles",
            page,
            size,
            sortBy,
            direction,
            search,
        ],

        queryFn: async () => {

            const response = await getRoles(
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