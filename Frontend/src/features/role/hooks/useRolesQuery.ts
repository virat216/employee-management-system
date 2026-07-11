import { useQuery } from "@tanstack/react-query";

import { getRoles } from "../services/roleService";

export function useRolesQuery() {

    return useQuery({

        queryKey: ["roles"],

        queryFn: async () => {

            const response = await getRoles();

            return response.data;

        },

    });

}