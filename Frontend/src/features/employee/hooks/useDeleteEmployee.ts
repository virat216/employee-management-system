import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteEmployee } from "../api/employeeService";
import { showError, showSuccess } from "../../../shared/utils/toast";

export function useDeleteEmployee() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteEmployee(id),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });

            showSuccess("Employee deleted successfully.");
        },

        onError: () => {
            showError("Failed to delete employee.");
        },
    });
}