import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteUser } from "../api/userService";

export function useDeleteUser() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteUser,

        onSuccess: () => {

            toast.success("User disabled successfully.");

            queryClient.invalidateQueries({

                queryKey: ["users"],

            });

        },

    });

}