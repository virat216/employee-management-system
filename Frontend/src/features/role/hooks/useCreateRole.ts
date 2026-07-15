import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createRole } from "../api/roleService";
import { showError, showSuccess } from "../../../shared/utils/toast";

import type { RoleRequest } from "../types/roleRequest";

export function useCreateRole() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (role: RoleRequest) =>
            createRole(role),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["roles"],

            });

            showSuccess("Role created successfully.");

        },

        onError: () => {

            showError("Failed to create role.");

        },

    });

}