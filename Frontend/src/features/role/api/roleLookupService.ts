import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { Role } from "../types/role";

export const getRoleLookup = async () => {

    const response =
        await api.get<ApiResponse<Role[]>>(
            "/roles/lookup"
        );

    return response.data;

};