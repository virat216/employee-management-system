import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { PageResponse } from "../../../shared/types/pageResponse";

import type { Role } from "../types/role";
import type { RoleRequest } from "../types/roleRequest";

export const getRoles = async (

    page: number,

    size: number,

    sortBy: string,

    direction: "asc" | "desc",

    search: string

) => {

    const response =
        await api.get<ApiResponse<PageResponse<Role>>>(
            "/roles",
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

export const createRole = async (
    role: RoleRequest
) => {

    const response =
        await api.post<ApiResponse<Role>>(
            "/roles",
            role
        );

    return response.data;

};

export const updateRole = async (

    id: number,

    role: RoleRequest

) => {

    const response =
        await api.put<ApiResponse<Role>>(
            `/roles/${id}`,
            role
        );

    return response.data;

};

export const deleteRole = async (
    id: number
) => {

    const response =
        await api.delete<ApiResponse<null>>(
            `/roles/${id}`
        );

    return response.data;

};