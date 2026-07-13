import { useQuery } from "@tanstack/react-query";

import { getEmployees } from "../api/employeeService";

interface UseEmployeesQueryProps {

    page: number;

    size: number;

    sortBy: string;

    direction: "asc" | "desc";

    departmentId?: number;

    roleId?: number;

}

export function useEmployeesQuery({

    page,

    size,

    sortBy,

    direction,

    departmentId,

    roleId,

}: UseEmployeesQueryProps) {

    return useQuery({

        queryKey: [
            "employees",
            page,
            size,
            sortBy,
            direction,
            departmentId,
            roleId,
        ],

        queryFn: async () => {

            const response = await getEmployees(
                page,
                size,
                sortBy,
                direction,
                departmentId,
                roleId
            );

            return response.data;

        },

        placeholderData: (previousData) => previousData,

    });

}