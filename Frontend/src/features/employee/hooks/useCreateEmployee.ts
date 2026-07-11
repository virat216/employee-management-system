import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createEmployee } from "../api/employeeService";

import type { EmployeeRequest } from "../types/employeeRequest";

export function useCreateEmployee() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (employee: EmployeeRequest) =>
            createEmployee(employee),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["employees"],

            });

        },

    });

}