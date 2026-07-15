import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateRole } from "../api/roleService";
import { showError, showSuccess } from "../../../shared/utils/toast";

import type { RoleRequest } from "../types/roleRequest";

export function useUpdateRole() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            role,
        }: {
            id: number;
            role: RoleRequest;
        }) => updateRole(id, role),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["roles"],

            });

            showSuccess("Role updated successfully.");

        },

        onError: () => {

            showError("Failed to update role.");

        },

    });

}