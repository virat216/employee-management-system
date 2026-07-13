import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createDepartment } from "../api/departmentService";

import { showError, showSuccess } from "../../../shared/utils/toast";

import type { DepartmentRequest } from "../types/departmentRequest";

export function useCreateDepartment() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (department: DepartmentRequest) =>
            createDepartment(department),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["departments"],

            });

            showSuccess("Department created successfully.");

        },

        onError: () => {

            showError("Failed to create department.");

        },

    });

}