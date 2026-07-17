import api from "../../../lib/axios";

import type { ApiResponse } from "../../../shared/types/api";
import type { Profile } from "../types/profile";

export const getProfile = async () => {

    const response =
        await api.get<ApiResponse<Profile>>(
            "/auth/me"
        );

    return response.data;

};