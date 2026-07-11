import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateEmployee } from "../api/employeeService";

import type { EmployeeRequest } from "../types/employeeRequest";

export function useUpdateEmployee() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            employee,
        }: {
            id: number;
            employee: EmployeeRequest;
        }) => updateEmployee(id, employee),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["employees"],

            });

        },

    });

}