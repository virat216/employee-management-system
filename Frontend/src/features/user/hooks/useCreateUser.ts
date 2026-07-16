import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUser } from "../api/userService";

export function useCreateUser() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createUser,

        onSuccess: () => {

            toast.success("User created successfully.");

            queryClient.invalidateQueries({

                queryKey: ["users"],

            });

        },

    });

}