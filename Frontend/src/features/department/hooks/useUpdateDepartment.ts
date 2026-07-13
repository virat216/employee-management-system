import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateDepartment } from "../api/departmentService";

import { showError, showSuccess } from "../../../shared/utils/toast";

import type { DepartmentRequest } from "../types/departmentRequest";

export function useUpdateDepartment() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            department,
        }: {
            id: number;
            department: DepartmentRequest;
        }) => updateDepartment(id, department),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["departments"],

            });

            showSuccess("Department updated successfully.");

        },

        onError: () => {

            showError("Failed to update department.");

        },

    });

}