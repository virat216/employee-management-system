import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateUser } from "../api/userService";

export function useUpdateUser() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({

            id,

            user,

        }: {

            id: number;

            user: Parameters<typeof updateUser>[1];

        }) => updateUser(id, user),

        onSuccess: () => {

            toast.success("User updated successfully.");

            queryClient.invalidateQueries({

                queryKey: ["users"],

            });

        },

    });

}