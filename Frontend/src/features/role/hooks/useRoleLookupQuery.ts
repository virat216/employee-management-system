import { useQuery } from "@tanstack/react-query";

import { getRoleLookup } from "../api/roleLookupService";

export function useRoleLookupQuery() {

    return useQuery({

        queryKey: ["role-lookup"],

        queryFn: async () => {

            const response =
                await getRoleLookup();

            return response.data;

        },

    });

}