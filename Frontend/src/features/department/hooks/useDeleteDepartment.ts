import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteDepartment } from "../api/departmentService";

import { showError, showSuccess } from "../../../shared/utils/toast";

export function useDeleteDepartment() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (id: number) =>
            deleteDepartment(id),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["departments"],

            });

            showSuccess("Department deleted successfully.");

        },

        onError: () => {

            showError("Failed to delete department.");

        },

    });

}