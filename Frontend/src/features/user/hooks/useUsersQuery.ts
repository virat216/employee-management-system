import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/userService";

interface UserQueryParams {

    page: number;

    size: number;

    sortBy: string;

    direction: "asc" | "desc";

    search: string;

}

export function useUsersQuery({

    page,

    size,

    sortBy,

    direction,

    search,

}: UserQueryParams) {

    return useQuery({

        queryKey: [
            "users",
            page,
            size,
            sortBy,
            direction,
            search,
        ],

        queryFn: async () => {

            const response =
                await getUsers(
                    page,
                    size,
                    sortBy,
                    direction,
                    search
                );

            return response.data;

        },

    });

}