import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteRole } from "../api/roleService";
import { showError, showSuccess } from "../../../shared/utils/toast";

export function useDeleteRole() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (id: number) =>
            deleteRole(id),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["roles"],

            });

            showSuccess("Role deleted successfully.");

        },

        onError: () => {

            showError("Failed to delete role.");

        },

    });

}