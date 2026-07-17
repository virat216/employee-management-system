import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { CurrentUser } from "../types/currentUser";

export const login = async (
    username: string,
    password: string
) => {

    const response = await api.post(
        "/auth/login",
        {
            username,
            password,
        }
    );

    return response.data;
};

export const getCurrentUser = async () => {

    const response =
        await api.get<ApiResponse<CurrentUser>>(
            "/auth/me"
        );

    return response.data;

};