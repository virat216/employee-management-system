import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { PageResponse } from "../../../shared/types/pageResponse";

import type { User } from "../types/user";
import type { UserRequest } from "../types/userRequest";

export const getUsers = async (

    page: number,

    size: number,

    sortBy: string,

    direction: "asc" | "desc",

    search: string

) => {

    const response =
        await api.get<ApiResponse<PageResponse<User>>>(
            "/users",
            {
                params: {
                    page,
                    size,
                    sortBy,
                    direction,
                    search,
                },
            }
        );

    return response.data;

};

export const createUser = async (
    user: UserRequest
) => {

    const response =
        await api.post<ApiResponse<User>>(
            "/users",
            user
        );

    return response.data;

};

export const updateUser = async (

    id: number,

    user: UserRequest

) => {

    const response =
        await api.put<ApiResponse<User>>(
            `/users/${id}`,
            user
        );

    return response.data;

};

export const deleteUser = async (
    id: number
) => {

    const response =
        await api.delete<ApiResponse<null>>(
            `/users/${id}`
        );

    return response.data;

};